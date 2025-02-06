import { AccordionItemWrapper, AccordionTitle } from "../Accordion";
import { Accordion } from "../Accordion";
import { FriendItem, AddFriendItem } from "../FriendItem";
import { useGetRooms } from "../../../../../react-query/queries/room/queries";
import { FriendItemSkeleton } from "../Skeleton";
import { AccordionTitleSkeleton } from "../Skeleton";

export default function Room(){
    const { data:rooms, isLoading:isRoomsLoading } = useGetRooms();

    if (isRoomsLoading) {
        return (
            <Accordion>
                <AccordionTitleSkeleton />
                <AccordionItemWrapper>
                    {[...Array(3)].map((_, index) => (
                        <FriendItemSkeleton key={index} />
                    ))}

                </AccordionItemWrapper>
            </Accordion>
        );
    }

    return (
        <Accordion>
            <AccordionTitle number={rooms?.length}>{"여행 크루 만들기"}</AccordionTitle>
            <AccordionItemWrapper>
                <AddFriendItem title={"방 만들기"} onClick={()=>{}} />

                {rooms ? 
                    rooms.map((room, index) => (
                        <FriendItem 
                            key={index} 
                            index={index+1} 
                            name={room.roomName} 
                            member={room.members} 
                        />

                    ))
                    : 
                    <></>
                }
            </AccordionItemWrapper>
        </Accordion>
    )
}
