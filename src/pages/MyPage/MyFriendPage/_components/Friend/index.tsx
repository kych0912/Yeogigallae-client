import { AccordionItemWrapper, AccordionTitle } from "../Accordion";
import { Accordion } from "../Accordion";
import { FriendItem, AddFriendItem } from "../FriendItem";
import { useGetFriends } from "../../../../../react-query/queries/friend/queries";
import { FriendItemSkeleton } from "../Skeleton";
import { AccordionTitleSkeleton } from "../Skeleton";

export default function Friend(){
    const { data:friends, isLoading:isFriendsLoading } = useGetFriends();


    if (isFriendsLoading) {
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
            <AccordionTitle number={friends?.length ?? 0}>{"여행 친구들"}</AccordionTitle>
            <AccordionItemWrapper>
                <AddFriendItem title={"새로운 여행 친구 초대하기"} onClick={()=>{}} />

                {friends ? 
                    friends.map((friend, index) => (
                        <FriendItem 
                            key={index} 
                            index={index+1} 
                            name={friend.friendName} 
                            //Member[] type에 맞게 변환
                            member={[{
                                userId:friend.friendId,
                                profileImage:friend.profileImageUrl,
                            }]} 
                        />
                    ))
                    : 
                    <></>
                }
            </AccordionItemWrapper>
        </Accordion>
    )
}
