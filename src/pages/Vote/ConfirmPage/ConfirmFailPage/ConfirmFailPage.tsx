import React from "react";
import VoteCard from "../../VoteCard/_components/VoteCard";
import { useFunnel } from "../../../../hooks/useFunnel/useFunnel";

const ConfirmFailPage: React.FC = () => {
  const { currentStep } = useFunnel(" ");

  return (
    <>
      <VoteCard showConfirmMessage={currentStep === "반대확인"} />
    </>
  );
};

export default ConfirmFailPage;
