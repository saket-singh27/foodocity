import Restaurantcard from "./Restaurantcard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import searchResto from "../utils/FilterFunction";
import useOnline from "../utils/useOnline";
import {API_LINK} from "../utils/Constants";
import Banner from "./Banner";

const Body = ()=>{

  const [searchText , updateSearchText] = useState(""); // 1st usestate for searching value
  const [filteredRestraunt , updateFilteredRestraunt] = useState([]); // 2nd usestate for rendering restolist we pass initial value of restrauntlist so that it initially rendered
  const [allRestraunt , updateAllRestraunt] = useState([]);
  const [banner , updateBanner] = useState([]);

    useEffect(()=>{
      getRestraunt();
    },[]);
  
    async function getRestraunt(){
      const data = await fetch(API_LINK);
      const json = await data.json();
      // console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle.info);
      updateFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      updateAllRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      updateBanner(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle.info);
    }
    // return filteredRestraunt,allRestraunt;


    const isOnline = useOnline();
    if(!isOnline){
      return <h2>check your internet connection</h2>
    }
    if(!allRestraunt) return null;
    // if(filteredRestraunt?.length ===0){return <h1>no resto found</h1>}
    return allRestraunt.length === 0? (<Shimmer/>) :(
    <>
    <div className="flex-col justify-center ">
    <div className="p-3 relative ">
    <div className="p-2 absolute right-0 ">
        <input data-testid="search-input" type="text" placeholder="Search here...." className="p-3 m-2 border shadow-md rounded-md bg-orange-200" value={searchText} onChange={(e) =>{
          updateSearchText(e.target.value);
        }}
        />
        
        <button data-testid="search-btn" className="p-3 m-1 border rounded-lg shadow-md bg-orange-400 " onClick={()=>{
          const data = searchResto(searchText , allRestraunt);
            updateFilteredRestraunt(data);
          }}>Search</button></div></div>

        <div className="px-5 border-b-0">
        <h2 className="font-bold text-2xl p-4 mb-4 border-b"> What's On Your Mind</h2>
        <div className=" justify-between px-5 mx-4 flex w-full overflow-x-hidden hover:overflow-x-scroll  scroll whitespace-nowrap scroll-smooth">
          {banner.map((banners) => <Banner info = {banners} key = {banners.id}/>)}</div>
        </div>  

        <div className="flex flex-wrap p-9 m-16 " data-testid="res_list">
        {filteredRestraunt.map((restraunt) =>{ // restrauntlist se sar saman restraunt show m aarha h fir usko hmlog restrauntcard m map krdiye h restocard basically jo hm banaye h different divvs m wahi h...aur spread operator iss liye use h cos hrr restolist ka object argument jaisa pass hojae 
          return (
            <Link to={"/restraunt/"+restraunt?.info?.id} key={restraunt?.info?.id}><Restaurantcard {...restraunt?.info} /></Link>) //spread operator
        })}
        </div>
        </div>
        
    </>
    )
      }


export default Body;