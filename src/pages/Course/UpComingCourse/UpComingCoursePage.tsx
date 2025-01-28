import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import {sampleData} from "../../Course/test"
import { useGetAllCourses } from "../../../react-query/queries/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useEffect } from "react";

export default function UpComingCoursePage() {
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    const allCoursesQueries = useGetAllCourses(sampleData);

    useEffect(() => {
        setHeaderConfig({title:"지구마블", number:4});
    }, []);

    if(allCoursesQueries[0].isLoading) return <div>Loading...</div>;

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={allCoursesQueries[0].data}/>
            <RecommendCard/>
        </UpComingContainer >
    );
}