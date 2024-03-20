import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
// import useRestraunt from "../utils/useRestraunt";
import { RESTO_API_LINK } from "../utils/Constants";
import { IMG_LINK } from "../utils/Constants";
import { useContext , useState , useEffect} from "react";
import UserContext from "../utils/UserContext";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const [restraunt , setrestraunt] = useState(null);

    useEffect(()=>{
        setRestrauntMenu();
    },[])

    async function setRestrauntMenu() {
        const data = await fetch(RESTO_API_LINK + resId)
        const json = await data.json();
        // console.log(Object.values(json?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards));
        setrestraunt(json?.data);
        console.log(json.data)
    }

    const rating = restraunt?.cards[0].card?.card?.info?.totalRatingsString;
    const distanceDetails = restraunt?.cards[0].card?.card?.info?.feeDetails.message;
    const cuisines = restraunt?.cards[0].card?.card?.info?.cuisines;
    const imageID = restraunt?.cards[0].card?.card?.info?.cloudinaryImageId;
    const areaName = restraunt?.cards[0].card?.card?.info?.areaName;
    const avgRating = restraunt?.cards[0].card?.card?.info?.avgRating;
    const costForTwo = restraunt?.cards[0].card?.card?.info?.costForTwoMessage;
    const name = restraunt?.cards[0].card?.card?.info?.name;
    const Menu = restraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
    // const Menu2 = restraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
    // const Menu = Object.values(MenuList);
    // console.log(Object.values(Menu));
    // console.log(Menu[0].card.info)
    console.log(Menu)
    const dispatch = useDispatch();


    const handleAddItem = ()=>{
        dispatch(addItem("grapes"));
    }

    const handleRemoveItem = ()=>{
        dispatch(removeItem());
    };

    const handleClearCartItem=()=>{
        dispatch(clearCart());
    }

    return (!restraunt)?  <Shimmer/>: (
        <div className="grid grid-cols-6 gap-4 top-7">
            <div className="border-b col-start-2 col-span-4 p-3 mt-6 m-2 pt-3">
            <div className="flex justify-between">
                <div className="">
                    <img className="h-36 p-3 rounded-xl " src={IMG_LINK + imageID}></img>
                    <h1 className="text-2xl font-mono py-3">{name}</h1>
                    <h3 className="font-serif ">{cuisines.join(" , ")}</h3>
                    <h3 className="">{areaName}</h3>
                    <h3 className="">{costForTwo}</h3>
                    <h3 className="">{distanceDetails}</h3>
                </div>
                <div className="border-b h-20 ">
                    <h2 className="font-medium border-b ">{avgRating} ⭐</h2>
                    <h4 className="font-thin ">{rating}</h4>
                </div>
                </div>
            </div>
            {/* <div className="flex-row p-4">
                
                <button className="p-2 m-1 bg-orange-100" onClick={()=>handleAddItem()}>Add Item</button>
                <button className="p-2 m-1 bg-red-100" onClick={()=>handleRemoveItem()}>Remove Item</button>
                <button className="p-2 m-1 bg-purple-100" onClick={()=>handleClearCartItem()}>Clear cart</button>
            </div> */}
            <div className="col-start-2 col-span-4 py-5 ">
                <h1 className="text-3xl border-b pt-5 mt-5">Menu</h1>
            {Menu.map(data=>
                <div className="border-b py-5 my-6 flex flex-row-reverse" key={data.card.info.id}>
                <div>
                    <img className="h-56 rounded-md shadow-xl" src={IMG_LINK + data.card.info.imageId}></img>
                    </div>
                    <div className="py-4">
                        <div className="font-medium w-1/2 py-1">{data.card.info.name}</div> ₹{data.card.info.price/100} 
                    <div className="w-1/2 font-extralight py-4">{data.card.info.description}</div>
                    </div>
                </div>)}
            
            </div>
        </div>
    )
}

export default RestaurantMenu;