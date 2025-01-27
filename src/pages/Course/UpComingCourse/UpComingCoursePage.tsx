import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import {sampleData} from "../../Course/test"
import { useGetAllCourses } from "../../../react-query/queries/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";

export default function UpComingCoursePage() {
    const allCoursesQueries = useGetAllCourses(sampleData);

    if(allCoursesQueries[0].isLoading) return <div>Loading...</div>;

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={allCoursesQueries[0].data}/>
            <RecommendCard/>
        </UpComingContainer >
    );
}