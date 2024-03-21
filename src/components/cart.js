import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux"; 
import { IMG_LINK } from "../utils/Constants";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearcart = ()=>{
        dispatch(clearCart());
    }

    const cardItems = useSelector(store => (store.cart.items));
    // console.log(cardItems)
    

    return(
        <div className="grid grid-cols-6 gap-4 top-7">
        <div className="col-start-2 col-span-4 flex py-2 justify-between border-b">
            <h1 className="text-3xl pt-3">Cart items - {cardItems.length}</h1>
            <button className="p-4 m-2 bg-green-100" onClick={()=>handleClearcart()}>Clear cart</button>
        </div>
        {cardItems.length >0 ?
        <div className="col-start-2 col-span-4 py-5 ">
            {cardItems.map(data=>
                <div className="border-b py-5 my-6 flex flex-row-reverse" key={data.card.info.id}>
                <div>
                    <img className="h-56 rounded-md shadow-xl "  src={IMG_LINK + data.card.info.imageId}></img>
                    </div>
                    <div className="py-4">
                        <div className="font-medium w-1/2 py-1">{data.card.info.name}</div> ₹{data.card.info.price/100} 
                    <div className="w-1/2 font-extralight py-4">{data.card.info.description}</div>
                    </div>
                </div>)}
                <div>
                 <button className="border w-auto p-4 bg-green-200 hover:scale-90">Proceed To Checkout</button>
                </div>
            </div>
            : <div className=" col-start-3 col-span-4 h-svh ">
                <img className="h-1/2 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"/>
            </div>}
    </div>
    )
}

export default Cart;