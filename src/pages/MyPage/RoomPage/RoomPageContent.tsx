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
import { setStepFn } from '../../../hooks/useFunnel/useFunnel';
import { useEffect } from 'react';

type RoomFormValues = z.infer<typeof roomSchema>;

export default function RoomPageContent() {
    const {control,handleSubmit,formState:{errors}} = useForm<RoomFormValues>({
        resolver: zodResolver(roomSchema),
        defaultValues:{
            roomName:"",
            roomFriend:[]
        }
    });
    const {setHeaderConfig} = useOutletContext();

    
    const onSubmit = (data: RoomFormValues) => {
        console.log('제출된 데이터:', data);
        // 여기에 API 호출 등의 로직 추가
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
                    type="submit" 
                    size="large" 
                    color="secondary" 
                    style={{color:"white"}}
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