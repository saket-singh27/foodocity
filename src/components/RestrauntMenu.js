import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { IMG_LINK } from "../utils/Constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const restraunt = useRestraunt(resId);
    const {user} = useContext(UserContext)
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
        <div className="flex p-4">
        <div className="flex-col m-2">
            <img className="w-80 p-3" src={IMG_LINK + restraunt?.cards[0].card?.card?.info?.cloudinaryImageId}></img>
            <h1 className="text-2xl">{restraunt?.cards[0].card?.card?.info?.name}</h1>
            <p>menuId {resId}</p>
            <h3>{restraunt?.cards[0].card?.card?.info?.areaName}</h3>
            <h3>{restraunt?.cards[0].card?.card?.info?.avgRating} Stars</h3>
            <h3>{restraunt?.cards[0].card?.card?.info?.costForTwoMessage}</h3>
            {/* {console.log(Object.values(restraunt.cards[2].groupedCard.cardGroupMap.REGULAR.cards))} */}
            <h3>{user.name}</h3>
            </div>
            <div className="flex-row p-4">
            <h1 className="text-xl underline">Menu</h1>
            <button className="p-2 m-1 bg-orange-100" onClick={()=>handleAddItem()}>Add Item</button>
            <button className="p-2 m-1 bg-red-100" onClick={()=>handleRemoveItem()}>Remove Item</button>
            <button className="p-2 m-1 bg-purple-100" onClick={()=>handleClearCartItem()}>Clear cart</button>
            <ol>
            <li>"French Fries":106</li>
            <li>"French Fries":106</li>
            <li>"French Fries":106</li>
            <li>"French Fries":106</li>
            </ol>
            </div>
        </div>
    )
}

export default RestaurantMenu;