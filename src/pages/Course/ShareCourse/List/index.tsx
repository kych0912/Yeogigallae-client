import ListCard from "./_components/ListCard";
import { Button } from "../../../../components/Button";
import * as S from "./_components/Style";
import AddPlace from "./_components/AddPlace";
import { ShareCourseData, TShareCourseContext } from "../ShareCorsePage";
import useSetHeader from "../../../../hooks/useSetHeader";
import { createPortal } from "react-dom";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useShareCourseForm } from "../../../../hooks/useShareForm";
import { DefaultPlace } from "../../constants";
import CourseSearchPage from "./_components/CourseSearchPage";

export type FormData ={
    places: ShareCourseData
}

export default function List({
    onNext, 
    context,
}: {
    onNext:(data:ShareCourseData)=>void,
    context:TShareCourseContext
}){
    const navigate = useNavigate();
    //useForm, useFieldArray 사용
    //각 ListCard는 FieldArray에 속해있음
    const { handleSubmit, control, setValue, isValid, fields, append, remove } = useShareCourseForm(context);
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

    const onSubmit = (data:FormData) => {
        console.log(data.places);
        onNext(data.places);
    }

    return (
    <>
    {
        searchState.isOpen ? (
            <CourseSearchPage
                handleSelectItem={(place) => {
                    console.log(place); 
                    setValue(`places.${searchState.selectedIndex}.place`, {
                        placeId: place.id,
                        placeName: place.place_name,
                        lat: place.x,
                        lng: place.y,
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
                    disabled={!isValid}
                >
                    {"장소 공유하기"}
                    </Button>
                </S.BottomButtonWrapper>
            ,document.body)}
        </form>
        )
    }
    </>
    )
}
