import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

export const heading = (
    <Link to={"/"}><img alt = "logo" data-testid="logo" className="h-28 p-3" src="https://i.pinimg.com/564x/2b/a8/7f/2ba87f564a20384b9e2e2b8a33d35f8e.jpg"></img></Link>
)

const Headingcomponent =() => {
    // const {user} = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <>
    <div className="flex justify-between border-b shadow-lg bg-slate-50 sticky top-0 z-10 ">
        {heading}
        <div className="">
            <ul className="flex space-x-5 flex-row-right p-3 m-2">
            <li className=""><Link to={"/"}>Home</Link></li>
            <li className="flex"><Link to={"/contact"}>Contact_us</Link></li>
            <li className="flex"><Link to={"/about"}>About_us</Link></li>
            <li className="flex"><Link to={"/instamart"}>Instamart</Link></li>
            <li className="flex"><Link to={"/cart"} data-testid="cart_items">Cart - {cartItems.length} items</Link></li>
            <h2 data-testid="online_status" className="flex-row-reverse">{useOnline ? "✅" : "❌"}</h2>
            </ul>
        </div>
    </div>
    </>
    )
    }
export default Headingcomponent;