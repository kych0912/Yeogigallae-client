import ListCard from "./_components/ListCard";
import { Button } from "../../../../components/Button";
import * as S from "./_components/Style";
import AddPlace from "./_components/AddPlace";
import { useState } from "react";
import { ShareCourseData, TShareCourseContext } from "../ShareCorsePage";

export default function List({
    onNext,
    context,

}: {
    onNext:(data:ShareCourseData)=>void
    context:TShareCourseContext
}){

    const [places, setPlaces] = useState<ShareCourseData>(context.코스목록 || [{
        image: "",
        place: "",
        description: "",
    }]);

    const handleAddPlace = () => {
        setPlaces([...places, {
            image: "",
            place: "",
            description: "",
        }]);
    }

    return (
        <>
            <S.ItemContainer> 
                {places.map((place,index) => (
                    <ListCard 
                        key={`place-${index}`}
                        place={place}
                        onChange={(updatedPlace) => {
                            const newPlaces = [...places];
                            newPlaces[index] = updatedPlace;
                            setPlaces(newPlaces);
                        }}
                    />
                ))}


                <AddPlace onClick={handleAddPlace}/>
            </S.ItemContainer>

            <S.BottomButtonWrapper>
                <Button variant="contained" size="large" onClick={()=>onNext(places)}>
                    {"장소 공유하기"}
                </Button>
            </S.BottomButtonWrapper>
        </>
    )
}
