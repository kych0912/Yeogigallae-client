import { UseQueryResult } from "@tanstack/react-query";
import { Route } from "../../../../../apis/map/types";
import * as S from "./Style";

interface ICourseDayButtonProps{
    allCoursesQueries:UseQueryResult<Route | null, Error>[],
    handleSlideChange:(index:number)=>void,
    activeIndex:number
}

export default function CourseDayButton({
    allCoursesQueries,
    handleSlideChange,
    activeIndex}:ICourseDayButtonProps){

    return(
      <S.ButtonContainer>
        <S.ButtonWrapper>
        {
            allCoursesQueries.map((_,index)=>(
              <S.DayButton 
                onClick={()=>handleSlideChange(index)} 
                isActive={activeIndex === index}
                size="small"
              >
                {`${index+1}일차`}
              </S.DayButton>
            ))
          }
        </S.ButtonWrapper>
      </S.ButtonContainer>
    )
}