// 마이페이지
import React from 'react';
import * as S from './_components/Friend.style'; 
import CommonContainer from '../../../components/Layout/CommonContainer';
import {
    Accordion,
    AccordionTitle,
    AccordionItemWrapper,
    AccordionItem
} from './_components/Accordion';

const MyFriendPage: React.FC = () => {


    return (
        <CommonContainer>
            <Accordion>
                <AccordionTitle>
                    {"여행 크루 만들기"}
                </AccordionTitle>
                <AccordionItemWrapper>
                    <AccordionItem index={0}>
                        <S.Item.AddCircle>
                            {"+"}
                        </S.Item.AddCircle>
                        {"친구 추가"}
                    </AccordionItem>
                    <AccordionItem index={1}>
                        <S.Accordion.Avatar src="https://picsum.photos/200/300" alt="friend" />
                            {"친구 목록"}
                    </AccordionItem>
                    <AccordionItem index={2}>
                        <S.Accordion.Avatar src="https://picsum.photos/200/300" alt="friend" />
                            {"친구 목록"}
                    </AccordionItem>
                    <AccordionItem index={3}>
                        <S.Accordion.Avatar src="https://picsum.photos/200/300" alt="friend" />
                            {"친구 목록"}
                    </AccordionItem>
                </AccordionItemWrapper>
            </Accordion>

            <Accordion>
                <AccordionTitle>
                    {"여행 크루 만들기"}
                </AccordionTitle>
                <AccordionItemWrapper>
                    <AccordionItem index={0}>
                        <S.Item.AddCircle>
                            {"+"}
                        </S.Item.AddCircle>
                        {"친구 추가"}
                    </AccordionItem>
                    <AccordionItem index={1}>
                        <S.Accordion.Avatar src="https://picsum.photos/200/300" alt="friend" />
                            {"친구 목록"}
                    </AccordionItem>
                    <AccordionItem index={2}>
                        <S.Accordion.Avatar src="https://picsum.photos/200/300" alt="friend" />
                            {"친구 목록"}
                    </AccordionItem>
                    <AccordionItem index={3}>
                        <S.Accordion.Avatar src="https://picsum.photos/200/300" alt="friend" />
                            {"친구 목록"}
                    </AccordionItem>
                </AccordionItemWrapper>
            </Accordion>
        </CommonContainer>
    );
};

export default MyFriendPage;
