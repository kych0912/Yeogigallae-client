import ListCard from "./_components/ListCard";
import { Button } from "../../../../components/Button";
import * as S from "./_components/Style";
import AddPlace from "./_components/AddPlace";
import { ShareCourseData } from "../ShareCorsePage";
import useSetHeader from "../../../../hooks/useSetHeader";
import { createPortal } from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShareCourseListSchema } from "../schema";
import * as z from "zod";

export type FormData ={
    places: ShareCourseData
}

export const FormDataSchema = z.object({
    places: ShareCourseListSchema
})

const DefaultPlace:ShareCourseData[number] = {
    image: "",
    place: {
        placeId: 1,
        placeName: "",
        lat: 0,
        lng: 0,
    },
    description: "",
}

export default function List({
    onNext,
}: {
    onNext:(data:ShareCourseData)=>void
}){
    const {
        handleSubmit, 
        control, 
        formState:{isValid},
    } = useForm<FormData>({
        resolver: zodResolver(FormDataSchema),
        defaultValues:{
            places: [DefaultPlace]
        }
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "places",
    });

    const handleAddPlace = () => {
        append(DefaultPlace);
    };

    useSetHeader({
        title:"장소 공유하기",
    });

    const onSubmit = (data:FormData) => {
        console.log(data.places);
        onNext(data.places);
    }

    return (
        <form id={"share-course-list"} onSubmit={handleSubmit(onSubmit)}> 
            <S.ItemContainer> 
                {fields.map((field,index) => {
                    return(
                        <ListCard 
                            key={field.id}
                            index={index}
                            control={control}
                            remove={() => remove(index)}
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
