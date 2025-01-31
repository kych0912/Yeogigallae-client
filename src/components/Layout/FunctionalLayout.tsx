import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import { useState, useEffect } from "react";
import HeaderCenterContent from "../Header/HeaderCenterContent";

interface HeaderConfig {
  title: string;
  number?: number;
}

export default function Layout() {
  const { currentStep: step, setStep } = useFunnel("생성");
  const navigate = useNavigate();
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({ title: "" });
  const { title, number } = headerConfig;

  useEffect(() => {
    if (!title.trim()) {
      setHeaderConfig({ title: "생성하기" });
    }
  }, [title]);

  const getCenterContent = () => {
    if (title.trim()) return <HeaderCenterContent title={title} number={number} />;
    if (step === "주소검색") return "장소 찾기";
    if (step === "캘린더") return "기간 정하기";
    return "생성하기"; 
  };

  const handleBack = () => {
    if (step === "주소검색" || step === "캘린더") {
      setStep("생성");
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <Header
        leftContent={
          <IconButton onClick={handleBack}>
            <BackIcon />
          </IconButton>
        }
        centerContent={getCenterContent()} 
        rightContent={
          <IconButton onClick={() => navigate("/")}> 
            <HomeIcon />
          </IconButton>
        }
      />
      <main>
        <Outlet context={{ setHeaderConfig }} /> 
      </main>
    </>
  );
}
