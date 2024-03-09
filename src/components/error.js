import { useRouteError } from "react-router-dom";

const error = ()=>{
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>oops</h1>
            <h3>something went wrong</h3>
            <i>{err.status+ ":" + err.statusText}</i>
        </div>
    )
}

export default error;