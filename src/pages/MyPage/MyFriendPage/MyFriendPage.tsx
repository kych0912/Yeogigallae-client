import CommonContainer from '../../../components/Layout/CommonContainer';
import {
    Accordion,
    AccordionTitle,
    AccordionItemWrapper,
} from './_components/Accordion';
import FriendItem from './_components/FriendItem';

export default function MyFriendPage(){
    // 실제로는 API나 상태관리로 받아올 데이터
    const mockFriends = [
        { name: "친구 추가", Avatar: "" },
        { name: "친구 1", Avatar: "https://picsum.photos/200/300" },
        { name: "친구 2", Avatar: "https://picsum.photos/200/300" },
        { name: "친구 3", Avatar: "https://picsum.photos/200/300" },
    ];

    return (
        <CommonContainer>
            <Accordion>
                <AccordionTitle number={mockFriends.length}>
                    {"여행 크루 만들기"}
                </AccordionTitle>
                <AccordionItemWrapper>
                    {mockFriends.map((friend, index) => (
                        <FriendItem 
                            key={index}
                            index={index}
                            name={friend.name}
                            Avatar={friend.Avatar}
                        />
                    ))}
                </AccordionItemWrapper>
            </Accordion>

            <Accordion>
                <AccordionTitle number={mockFriends.length}>
                    {"여행 친구들"}
                </AccordionTitle>
                <AccordionItemWrapper>
                    {mockFriends.map((friend, index) => (
                        <FriendItem 
                            key={index}
                            index={index}
                            name={friend.name}
                            Avatar={friend.Avatar}
                        />
                    ))}
                </AccordionItemWrapper>
            </Accordion>
        </CommonContainer>
    );
};