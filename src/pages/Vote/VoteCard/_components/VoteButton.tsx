import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { useVoteMainMutation } from "../../../../react-query/mutation/vote/useVoteMainMutation";
import { VoteData } from "../../context/vote/VoteDataType";
import * as S from "./../../_components/Vote.styles";

export default function VoteButtons({
  onAgree,
  onDisagree,
}: {
  onAgree?: () => void;
  onDisagree?: () => void;
}) {
  const { tripId, roomId } = useParams<{ tripId?: string; roomId?: string }>();
  const { mutate: postVote, isPending } = useVoteMainMutation((data) => {
    console.log(data);
  });
  const [currentVoteType, setCurrentVoteType] = useState<"GOOD" | "BAD" | null>(null);

  const handleVote = (type: "GOOD" | "BAD") => {
    if (!tripId || !roomId) return;

    setCurrentVoteType(type);

    const voteData: VoteData = {
      tripId: parseInt(tripId, 10),
      type,
      voteRoomId: parseInt(roomId, 10),
    };

    postVote(voteData, {
      onSuccess: () => {
        type === "GOOD" ? onAgree?.() : onDisagree?.();
      },
    });
  };

  return (
    <S.TwoSelect>
      <Button
        size="large"
        onClick={() => handleVote("BAD")}
        disabled={isPending}
        style={{
          backgroundColor: currentVoteType === "BAD" ? "#434343" : "#434343",
        }}
      >
        {"난 못 가.."}
      </Button>
      <Button
        size="large"
        onClick={() => handleVote("GOOD")}
        disabled={isPending}
        style={{
          backgroundColor: currentVoteType === "GOOD" ? "#3b46f1" : "#3b46f1",
        }}
      >
        {"좋아!"}
      </Button>
    </S.TwoSelect>
  );
}
