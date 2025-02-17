import { AccordionItemWrapper, AccordionTitle } from "../Accordion";
import { Accordion } from "../Accordion";
import { FriendItem, AddFriendItem } from "../FriendItem";
import { useGetFriends } from "../../../../../react-query/queries/friend/queries";
import { FriendItemSkeleton } from "../Skeleton";
import { AccordionTitleSkeleton } from "../Skeleton";
import modal from "../../../../../components/Modal";
import { createFriendUrl } from "../../../../../apis/friend";

export default function Friend(){
    const { data:friends, isLoading:isFriendsLoading } = useGetFriends();

    const handleGenerateInviteUrl = async () => {
        try{
            const response = await createFriendUrl();
            const url = response.replace("localhost:8080", "yeogi.my");
            return url;
        }catch(error){
            console.error("초대 링크 생성 실패:", error);
            return null;
        }
    }


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
                <AddFriendItem title={"새로운 여행 친구 초대하기"} onClick={()=>{
                    modal.confirm.show({
                        message:"링크를 복사하시겠습니까?",
                        onConfirm: async ()=>{
                            const url = await handleGenerateInviteUrl();
                            if(url){
                                navigator.clipboard.writeText(url);
                                modal.confirm.show({
                                    message:"링크를 복사했어요.",
                                    isOneButton:true,
                                    onConfirm:()=>{
                                        console.log("링크를 복사했어요.");
                                    }
                                }); 
                            }
                        }
                    })
                }} />

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
