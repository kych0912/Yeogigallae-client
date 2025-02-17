import ListCard from "./_components/ListCard";
import { Button } from "../../../../components/Button";
import * as S from "./_components/Style";
import AddPlace from "./_components/AddPlace";
import { TShareCourseContext } from "../ShareCorsePage";
import useSetHeader from "../../../../hooks/useSetHeader";
import { createPortal } from "react-dom";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useShareCourseForm } from "../../../../hooks/useShareForm";
import { DefaultPlace } from "../../constants";
import CourseSearchPage from "./_components/CourseSearchPage";
import { usePostCoursePlace } from "../../../../react-query/mutation/course/mutations";
import ButtonLoading from "./_components/ButtonLoading";
import { TShareCoursePlacesInfo } from "../../../../apis/course";
import { TListFormData } from "../../../Course/ShareCourse/share.types";

//임시 유저 아이디
const userId = 1;

export default function List({
    onNext, 
    context,
}: {
    onNext:()=>void,
    context:TShareCourseContext
}){
    const navigate = useNavigate();
    //useForm, useFieldArray 사용
    //각 ListCard는 FieldArray에 속해있음
    const { handleSubmit, control, setValue, isValid, fields, append, remove } = useShareCourseForm(context);
    const { mutate: postCoursePlace,isPending } = usePostCoursePlace();
    const [searchState, setSearchState] = useState({
        isOpen: false,
        selectedIndex: -1
    });

    const handleAddPlace = () => {
        append(DefaultPlace);
    };

    //searchPage가 열려 있을 땐 상태변화만
    //아닐경우 뒤로가기
    const handleBack = useCallback(() => {
        if (searchState.isOpen) {
            setSearchState({
                isOpen: false,
                selectedIndex: -1
            });
        } else {
            navigate(-1);
        }
    }, [searchState.isOpen, navigate]);   

    //leftFunction에는 callback함수를 넣어야 함
    //아닐 경우 콜스택에 계속 쌓임
    useSetHeader({
        title: "장소 공유하기",
        leftFunction: handleBack
    });

    const onSubmit = (data:TListFormData) => {
        
        const placeCardInfo:TShareCoursePlacesInfo[] = data.places.map((place) => ({
            userId: userId.toString(),
            imageUrl: place.imageUrl,
            description: place.description,
            address: place.place.address,
            placeName: place.place.placeName,
            latitude: place.place.latitude,
            longitude: place.place.longitude
        }));

        postCoursePlace({placeCardInfo:placeCardInfo, roomId:context.여행상세.roomId}, {
            onSuccess: () => {
                onNext();
            },
            onError: (error) => {
                console.error(error);
            }
        });
    }

    return (
    <>
    {
        searchState.isOpen ? (
            <CourseSearchPage
                handleSelectItem={(place) => {
                    setValue(`places.${searchState.selectedIndex}.place`, {
                        address: place.address_name,
                        placeName: place.place_name,
                        latitude: place.x,
                        longitude: place.y,
                    },{
                        //setValue후 검증
                        shouldValidate: true,
                    });
                    setSearchState({
                        isOpen: false,
                        selectedIndex: -1
                    });
                }}
            />
        ) : (
        <form id={"share-course-list"} onSubmit={handleSubmit(onSubmit)}> 
            <S.ItemContainer> 
                {fields.map((field,index) => {
                    return(
                        <ListCard 
                            key={field.id}
                            index={index}
                            control={control}
                            remove={() => remove(index)}
                            onSearch={() => {
                                setSearchState({
                                    isOpen: true,
                                    selectedIndex: index
                                });
                            }}
                        />
                    )
                })}
                <AddPlace onClick={handleAddPlace}/>
            </S.ItemContainer>
            {createPortal(
            <S.BottomButtonWrapper>
                <Button 
                    variant="contained" 
                    size="large"    
                    type="submit"
                    form={"share-course-list"}
                    disabled={!isValid || isPending}
                >
                    {
                        isPending ?
                        <ButtonLoading/> :
                        "장소 공유하기"
                    }
                    </Button>
                </S.BottomButtonWrapper>
            ,document.body)}
        </form>
        )
    }
    </>
    )
}
