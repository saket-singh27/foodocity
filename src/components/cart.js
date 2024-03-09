import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux"; 

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearcart = ()=>{
        dispatch(clearCart());
    }

    const cardItems = useSelector(store => (store.cart.items));
    <h1>cardItems</h1>

    return(
        <div>
    <h1 className="text-3xl p-4">Cart items - {cardItems.length}</h1>
    <button className="p-4 m-2 bg-green-100" onClick={()=>handleClearcart()}>Clear cart</button>
    </div>
    )
}

export default Cart;