import { UseQueryResult } from "@tanstack/react-query";
import { ButtonWrapper } from "./Course.style";
import { Button } from "../../../components/Button";
import { Route } from "../../../apis/map/types";

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
        <ButtonWrapper>
        {
          allCoursesQueries.map((_,index)=>(
            <Button 
              onClick={()=>handleSlideChange(index)} 
              style={{width:'100px',padding:'0.875rem 0',color:"white"}} 
              color={activeIndex === index ? "primary" : "secondary"} 
              size="small"
            >
              {`${index+1}일차`}
            </Button>
          ))
        }
      </ButtonWrapper>

    )
}