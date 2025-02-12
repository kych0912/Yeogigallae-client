import Card from "../../../../../components/Card";
import * as S from "../../../_components/Course.style";
import * as M from "./Style";
import NaverIcon from "../../../../../assets/icons/Naver.svg?react";
import modal from "../../../../../components/Modal";
import AddImage from "./AddImage";
import { Control, useController } from "react-hook-form";
import { FormDataSchema } from "../../../constants";
import * as z from "zod";
import DeleteTitle from "./DeleteTitle";

export default function ListCard({ 
    index,
    control,    
    remove,
    onSearch,
}: {
    index: number,
    control: Control<z.infer<typeof FormDataSchema>>,
    remove: () => void,
    onSearch: () => void,
}) {
    const { field: imageField } = useController({
        name: `places.${index}.image`,
        control,
    });

    const { field: descriptionField } = useController({
        name: `places.${index}.description`,
        control,
    });

    const { field: placeField } = useController({
        name: `places.${index}.place`,
        control,
    });

    return (
        <>
            <Card>
                <Card.Item>
                    <DeleteTitle title={`장소 ${index + 1}`} remove={remove}/>
                </Card.Item>

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
                    <S.TitleWrapper onClick={onSearch}>
                        <S.Caption>{"장소"}</S.Caption>
                        {
                            placeField.value.placeId ? (
                                <S.PlaceContent>
                                    {placeField.value.placeName}
                                </S.PlaceContent>
                            ) : (
                                <S.PlaceContent>
                                    {"장소를 입력하세요."}
                                </S.PlaceContent>
                            )
                        }
                    </S.TitleWrapper>
                </Card.Item>
            </Card>
        </>
    );
}