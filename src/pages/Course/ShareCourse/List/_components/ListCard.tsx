import Card from "../../../../../components/Card";
import * as S from "../../../_components/Course.style";
import * as M from "./Style";
import NaverIcon from "../../../../../assets/icons/Naver.svg?react";
import modal from "../../../../../components/Modal";
import AddImage from "./AddImage";
import { Control, useController } from "react-hook-form";
import { FormDataSchema } from "../index";
import * as z from "zod";

export default function ListCard({ 
    index,
    control 
}: {
    index: number,
    control: Control<z.infer<typeof FormDataSchema>>
}) {
    const { field: imageField } = useController({
        name: `places.${index}.image`,
        control,
    });

    const { field: descriptionField } = useController({
        name: `places.${index}.description`,
        control,
    });

    return (
        <>
            <Card>
                <M.AddImageCard onClick={() => {
                    modal.image.show({
                        onConfirm: (data) => {
                            imageField.onChange(data);
                        },
                    })
                }}>
                    {
                        imageField.value ? 
                        <img 
                            style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"1.5rem"}} 
                            src={imageField.value} 
                            alt="장소 이미지" 
                        /> : 
                        <AddImage />
                    }
                </M.AddImageCard>

                <Card.Item>
                    <S.TextArea
                        value={descriptionField.value}
                        onChange={descriptionField.onChange}
                        placeholder="친구에게 전달할 메세지를 작성하세요."
                    />
                </Card.Item>

                <Card.Item>
                    <Card.Divider/>
                </Card.Item>

                <Card.Item>
                    <S.TitleWrapper>
                        <S.Caption>{"장소"}</S.Caption>

                        <S.NaverContent>
                            <NaverIcon/>{"네이버 지도 URL을 첨부해주세요."}
                        </S.NaverContent>
                    </S.TitleWrapper>
                </Card.Item>
            </Card>
        </>
    );
}