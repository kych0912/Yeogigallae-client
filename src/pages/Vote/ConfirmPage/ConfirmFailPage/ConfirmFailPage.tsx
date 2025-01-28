import VoteCard from "../../VoteCard/_components/VoteCard";
import { useFunnel } from "../../../../hooks/useFunnel/useFunnel";

export default function ConfirmFailPage() {
  const { currentStep } = useFunnel(" ");

  return (
    <>
      <VoteCard showConfirmMessage={currentStep === "반대확인"} />
    </>
  );
};

