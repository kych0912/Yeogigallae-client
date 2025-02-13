import InfoToggle from "./_components/InfoToggle";
import ChatInterface from "./_components/ChatInterface";
import useSetHeader from "../../../../hooks/useSetHeader";

export default function Share({title}:{title:string}){
    useSetHeader({
        title:title,
        number:4
    });
    return(
        <div>
            <InfoToggle />

            <ChatInterface />
        </div>
    )
}