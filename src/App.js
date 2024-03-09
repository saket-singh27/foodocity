import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Headingcomponent from "./components/Headingcomponent";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/error";
import RestaurantMenu from "./components/RestrauntMenu";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/cart";


const AppLayout = ()=>{
    const [user , setUser] = useState({
            name:"saket Singh",
            email:"singhsaket281@gmail.com"
    });
    return (
        <Provider store={store}> 
            <UserContext.Provider value = {{
             user:user,
        setUser:setUser
    }}>
        <Headingcomponent/>
        <Outlet/>
        <Footer/>
    </UserContext.Provider>
    </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement: <Error/>,
        children : [
        {
            path:"/about",
            element : <About/>,
        },
        {
            path:"/contact",
            element: <Contact/>,
        },
        {
            path:"/",
            element: <Body/>,
        },
        {
            path:"restraunt/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/instamart",
            element:<Instamart/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 