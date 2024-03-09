import { useState , useEffect } from "react";
import { RESTO_API_LINK } from "./Constants";

const useRestraunt = (resId) =>{
    const [restraunt , setrestraunt] = useState(null);
    
    useEffect(()=>{
        setRestrauntMenu();
    },[])

    async function setRestrauntMenu() {
        const data = await fetch(RESTO_API_LINK + resId)
        const json = await data.json();
        console.log(json?.data);
        setrestraunt(json?.data);
    }
    return restraunt;
}

    export default useRestraunt;