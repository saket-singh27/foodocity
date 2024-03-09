import { render } from "@testing-library/react";
import Headingcomponent from "../Headingcomponent"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"


test("logo is loaded at render" , ()=>{
    const header = render(
    <StaticRouter>
        <Provider store ={store}>
            <Headingcomponent/>
        </Provider>
    </StaticRouter>);
    console.log(header);
    const logo = header.getByTestId("logo");
    // console.log(logo.src);
    expect(logo.src).toBe("https://i.pinimg.com/564x/2b/a8/7f/2ba87f564a20384b9e2e2b8a33d35f8e.jpg")
})

test("online status is checked at render" , ()=>{
    const header = render(
    <StaticRouter>
        <Provider store ={store}>
            <Headingcomponent/>
        </Provider>
    </StaticRouter>);
    console.log(header);
    const onlinestatus = header.getByTestId("online_status");
    // console.log(logo.src);
    expect(onlinestatus.innerHTML).toBe("✅")
})

test("cart should have 0 items at render" , ()=>{
    const header = render(
    <StaticRouter>
        <Provider store ={store}>
            <Headingcomponent/>
        </Provider>
    </StaticRouter>);
    console.log(header);
    const cartitems = header.getByTestId("cart_items");
    // console.log(logo.src);
    expect(cartitems.innerHTML).toBe("Cart - 0 items")
})