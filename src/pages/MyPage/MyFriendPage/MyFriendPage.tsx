import CommonContainer from "../../../components/Layout/CommonContainer";
import { Accordion, AccordionTitle, AccordionItemWrapper } from "./_components/Accordion";
import FriendItem from "./_components/FriendItem";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useEffect } from "react";
import Room from "./_components/Room";

export default function MyFriendPage() {
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    useEffect(() => {   
        setHeaderConfig({title:"친구"});
    }, []);

    return (
        <CommonContainer>
            <Room />

            {/* <Accordion>
                <AccordionTitle number={mockFriends.length}>{"여행 친구들"}</AccordionTitle>
                <AccordionItemWrapper>
                    {mockFriends.map((friend, index) => (
                        <FriendItem key={index} index={index} name={friend.name} Avatar={friend.Avatar} />
                    ))}
                </AccordionItemWrapper>
            </Accordion> */}
        </CommonContainer>
    );
}
