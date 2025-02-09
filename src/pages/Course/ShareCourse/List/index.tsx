import ListCard from "./_components/ListCard";
import { Button } from "../../../../components/Button";
import * as S from "./_components/Style";
import AddPlace from "./_components/AddPlace";
import { useEffect, useState } from "react";
import { ShareCourseData, TShareCourseContext } from "../ShareCorsePage";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../../types/header/header";


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

    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    useEffect(()=>{
        setHeaderConfig({title:"장소 공유하기"});
    },[]);

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
