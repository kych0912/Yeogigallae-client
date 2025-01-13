import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./styles/theme";
import MainPage from "./pages/Main/MainPage/MainPage";
import LoginPage from "./pages/Login/LoginPage/LoginPage";
import BudgetPage from "./pages/Budget/BudgetPage/BudgetPage";
import CourseSharePage from "./pages/Information/CourseSharePage/CourseSharePage";
import ShareChatPage from "./pages/Information/ShareChatPage/ShareChatPage";
import ShareMapPage from "./pages/Information/ShareMapPage/ShareMapPage";
import SharePage from "./pages/Information/SharePage/SharePage";
import ShareWritePage from "./pages/Information/ShareWritePage/ShareWritePage";
import MyFriendPage from "./pages/MyPage/MyFriendPage/MyFriendPage";
import MyProfilePage from "./pages/MyPage/MyProfilePage/MyProfilePage";
import RoomPage from "./pages/MyPage/RoomPage/RoomPage";
import NoticePage from "./pages/Notice/NoticePage/NoticePage";
import BudgetSelectPage from "./pages/Scheduling/BudgetSelectPage/BudgetSelectPage";
import DateSelectPage from "./pages/Scheduling/DateSelectPage/DateSelectPage";
import SchedulePage from "./pages/Scheduling/SchedulePage/SchedulePage";
import SplashPage from "./pages/Splash/SplashPage/SplashPage";
import VoteAgreePage from "./pages/Vote/VoteAgreePage/VoteAgreePage";
import CreateCoursePage from "./pages/Functional/CreateCoursePage/CreateCoursePage";
import CreateVotePage from "./pages/Functional/CreateVotePage/CreateVotePage";
import CreateCalendar from "./pages/Functional/CreateCalendar/CreateCalendar";
import VotePage from "./pages/Vote/VoteAgreePage/VotePage";
import VoteDatePage from "./pages/Vote/VoteDatePage/VoteDatePage";
import VoteSuccessPage from "./pages/Vote/VoteCompletePage/VoteSuccessPage";
import VoteFailPage from "./pages/Vote/VoteCompletePage/VoteFailPage";
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CourseLayout from './components/Layout/CourseLayout';
import CoursePage from "./pages/course/page";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {/* Main */}
            <Route path="/" element={<MainPage />} />

            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Budget */}
            <Route path="/budget" element={<BudgetPage />} />

            {/* Information */}
            <Route path="/information/course-share" element={<CourseSharePage />} />
            <Route path="/information/share-chat" element={<ShareChatPage />} />
            <Route path="/information/share-map" element={<ShareMapPage />} />
            <Route path="/information/share" element={<SharePage />} />
            <Route path="/information/share-write" element={<ShareWritePage />} />

            {/* MyPage */}
            <Route path="/mypage/friend" element={<MyFriendPage />} />
            <Route path="/mypage/profile" element={<MyProfilePage />} />
            <Route path="/mypage/room" element={<RoomPage />} />

            {/* Notice */}
            <Route path="/notice" element={<NoticePage />} />

            {/* Scheduling */}
            <Route path="/scheduling/budget-select" element={<BudgetSelectPage />} />
            <Route path="/scheduling/date-select" element={<DateSelectPage />} />
            <Route path="/scheduling/schedule" element={<SchedulePage />} />

            {/* Splash */}
            <Route path="/splash" element={<SplashPage />} />

            {/* Vote */}
            <Route path="/vote" element={<VotePage />} />
            <Route path="/vote/agree" element={<VoteAgreePage />} />
            <Route path="/vote/date" element={<VoteDatePage />} />
            <Route path="/vote/success" element={<VoteSuccessPage />} />
            <Route path="/vote/fail" element={<VoteFailPage/>} />

            {/* Functional */}
            <Route path="/functional/course" element={<CreateCoursePage/>}/>
            <Route path="/functional/vote" element={<CreateVotePage/>}/>
            <Route path="/functonal/calendar" element={<CreateCalendar />} />
            
            <Route element={<CourseLayout />}>
                <Route path="/course" element={<CoursePage />} />
            </Route>

          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
