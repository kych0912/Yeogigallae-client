import { Control, useController } from "react-hook-form";
import Input from "../../../../components/Input";
import * as S from "./Room.style";
import { z } from "zod";
import { roomSchema } from "../schema";

type RoomFormValues = z.infer<typeof roomSchema>;

export default function RoomTitleForm({control}:{control:Control<RoomFormValues>}) {
    const { 
        field:{value,onChange,name},
    } = useController({control,name:'roomName'});

    return ( 
        <S.RoomTitleForm.RoomTitleFormContainer> 
            <S.RoomPage.RoomFriendTitle>{"방 이름 정하기"}</S.RoomPage.RoomFriendTitle>
            <Input 
                value={value}
                onChange={onChange}
                name={name}
                placeholder="방이름을 정해주세요"
            />
        </S.RoomTitleForm.RoomTitleFormContainer>
    );

}