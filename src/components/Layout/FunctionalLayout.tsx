import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderCenterContent from "../Header/HeaderCenterContent";

interface HeaderConfig {
  title: string;
  number?: number;
}

export default function Layout() {
  const navigate = useNavigate();
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({ title: "" });
  const { title, number } = headerConfig;

  useEffect(() => {
    if (!title.trim()) {
      setHeaderConfig({ title: "생성하기" });
    }
  }, [title]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header
        leftContent={
          <IconButton onClick={handleBack}>
            <BackIcon />
          </IconButton>
        }
        centerContent={<HeaderCenterContent title={title} number={number} />}
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
