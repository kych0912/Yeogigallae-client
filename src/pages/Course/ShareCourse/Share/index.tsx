import InfoToggle from "./_components/InfoToggle";
import ChatInterface from "./_components/ChatInterface";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../../types/header/header";
import { useEffect } from "react";

export default function Share({title}:{title:string}){
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    useEffect(()=>{
        setHeaderConfig({title:title,number:4});
    },[]);
    return(
        <div>
            <InfoToggle />

            <ChatInterface />
        </div>
    )
}