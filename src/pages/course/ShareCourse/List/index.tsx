import { Route } from "../../../../apis/map/types";
import ListCard from "./_components/ListCard";
import { Button } from "../../../../components/Button";
import * as S from "./_components/Style";
import AddPlace from "./_components/AddPlace";
import { useState } from "react";

interface Place {
    id: string;
    message: string;
    place:string;
}

export default function List({
    dailyRoutes,
}: {
    dailyRoutes: Route | null | undefined,
}){
    const [places, setPlaces] = useState<Place[]>([{
        id: Date.now().toString(),
        message: "",
        place: "",
    }]);
    
    const handleAddPlace = () => {
        setPlaces([...places, {
            id: Date.now().toString(),
            message: "",
            place: "",
        }]);
    }
    return (
        <>
            <S.ItemContainer>
                {places.map((place) => (
                    <ListCard 
                        dailyRoutes={dailyRoutes}
                        key={place.id}
                    />
                ))}

                <AddPlace onClick={handleAddPlace}/>
            </S.ItemContainer>

            <S.BottomButtonWrapper>
                <Button variant="contained" size="large">
                    {"장소 공유하기"}
                </Button>
            </S.BottomButtonWrapper>
        </>
    )
}
