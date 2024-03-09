import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter } from "react-router-dom/server";
import { RESTRAUNT_LIST } from "../../mocks/data";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTRAUNT_LIST)
        },
    });
});



test("shimmer is loading during render" , ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
    // console.log(shimmer);
})

test("search is working on rendering" , async ()=>{
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")));
    const reslist = body.getByTestId("res_list");
    expect(reslist.children.length).toBe(9);
})

test("after search data is recieving properly" , async ()=>{
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")));
    const input =body.getByTestId("search-input")
    fireEvent.change(input,{
        target:{
            value:"pizza",
        }
    })
    const searchbtn = body.getByTestId("search-btn");
    fireEvent.click(searchbtn);

    const reslist = body.getByTestId("res_list");
    expect(reslist.children.length).toBe(3);
})