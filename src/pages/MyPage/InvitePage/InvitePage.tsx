import { useEffect } from "react";
import modal from "../../../components/Modal";
import * as S from "./_components/Invite.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useAcceptInvite } from "../../../react-query/mutation/friend/mutations";
import LoadingText from "./_components/LoadingText";

export default function InvitePage(){
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const {mutate:acceptInvite, isPending, isError} = useAcceptInvite();

    useEffect(()=>{
        //토큰이 없으면 초대 링크가 존재 X
        if(!token){
            modal.confirm.show({
                message:"초대 링크가 존재하지 않아요.",
                isOneButton:true,
                onConfirm:()=>{
                    navigate("/");
                }
            })
            return;
        }

        //토큰이 있으면 초대 링크가 존재 O
        if(token){
            modal.confirm.show({
                message:"친구 요청을 수락하시겠습니까?",
                onCancel:()=>{
                    navigate("/");
                },
                onConfirm:()=>{
                    //에러 시 모달 표시
                    acceptInvite(token, {
                        onError: () => {
                            modal.confirm.show({
                                message: "친구 요청 수락 중 오류가 발생했어요",
                                isOneButton: true,
                                onConfirm: () => {
                                    navigate("/");
                                }
                            });
                        },
                        onSuccess:()=>{
                            modal.confirm.show({
                                message:"친구 요청을 수락했어요.",
                                isOneButton:true,
                                onConfirm:()=>{
                                    navigate("/");
                                }
                            });
                        }
                    });
                },
            })
        }

    },[token, navigate, acceptInvite])

    return(
        <S.Container>
            {
                isPending ?
                <LoadingText/>
                :
                isError ?
                    <S.Title>에러가 발생했어요.</S.Title>
                :
                    <S.Title>친구 요청을 수락하시겠습니까?</S.Title>
            }   
        </S.Container>
    )
}
