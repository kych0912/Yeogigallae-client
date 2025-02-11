import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { HeaderConfig } from "../types/header/header";

export default function useSetHeader({
    title,
    number,
}:HeaderConfig){
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    
    useEffect(()=>{
        setHeaderConfig({title:title,number:number});
    },[title,number,setHeaderConfig]);
}   
