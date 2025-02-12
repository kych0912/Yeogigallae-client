import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { HeaderConfig } from "../types/header/header";
import { useNavigate } from "react-router-dom";

export default function useSetHeader({
    title,
    number,
    leftFunction,
    rightFunction,
}:HeaderConfig){
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    const navigate = useNavigate();

    useEffect(()=>{
        setHeaderConfig({
            title:title,
            number:number,
            leftFunction:leftFunction || (()=>navigate(-1)),
            rightFunction:rightFunction || (()=>navigate("/")),
        });
    },[title,number,leftFunction,rightFunction,setHeaderConfig,navigate]);
}   
