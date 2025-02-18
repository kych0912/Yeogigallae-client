import { Button } from '../../../components/Button';
import { roomSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import RoomFriend from "./_components/RoomFriend";
import MyFriend from "./_components/MyFriend";  
import RoomTitleForm from "./_components/RoomTitleForm";
import * as z from "zod";
import * as S from "./_components/Room.style";
import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react';
import { HeaderConfig } from '../../../types/header/header';
import { useCreateRoom } from "../../../react-query/mutation/room/mutation";
import { useNavigate } from 'react-router-dom';
import modal from '../../../components/Modal';

type RoomFormValues = z.infer<typeof roomSchema>;

export default function RoomPageContent() {
    const navigate = useNavigate();
    const {mutate:createRoom} = useCreateRoom();
    const {control,handleSubmit,formState:{errors}} = useForm<RoomFormValues>({
        resolver: zodResolver(roomSchema),
        defaultValues:{
            roomName:"",
            roomFriend:[]
        }
    });
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    
    const onSubmit = (data: RoomFormValues) => {
        const friendIds = data.roomFriend.map((friend) => friend.friendId);

        const roomData = {
            roomName:data.roomName,
            userIds:friendIds
        }
        createRoom(roomData,{
            onSuccess:()=>{
                modal.confirm.show({
                    message:"방을 만들었어요.",
                    isOneButton:true,
                    onConfirm:()=>{
                        navigate("/");
                    }
                });
            },
            onError:()=>{
                modal.confirm.show({
                    message:"에러가 발생해 방을 만들지 못했어요.",
                    isOneButton:true,
                    onConfirm:()=>{
                        navigate("/");
                    }
                });
            }
        });
    };


    useEffect(()=>{
        setHeaderConfig({title:"방 만들기"});
    },[]);

    return (
        <S.RoomForm onSubmit={handleSubmit(onSubmit)}>


            <RoomTitleForm control={control} />

            <RoomFriend control={control} />

            <MyFriend control={control} />

            {/* 임시 에러 */}
            {errors.roomFriend && <S.RoomTitleForm.RoomTitleFormError>{errors.roomFriend.message}</S.RoomTitleForm.RoomTitleFormError>}
            
            <S.BottomButtonWrapper>
                <S.CancelButton 
                    type='button'
                    size="large" 
                    color="secondary" 
                    style={{color:"white"}}
                    onClick={() => navigate(-1)}
                >
                    {"취소"}
                </S.CancelButton>
                <Button type="submit" size="large" color="primary">
                    {"방 만들기"}
                </Button>
            </S.BottomButtonWrapper>
        </S.RoomForm>
    );
}   