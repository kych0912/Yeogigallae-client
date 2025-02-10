import { VoteType } from "../../../types/voteTypes/voteTypes";

const DEFAULT_IMAGE_URL =
  "https://s3-alpha-sig.figma.com/img/19e3/d758/89fc76fe69058e9d77f8b9d8eb86b52a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UD7-M2Kzy6ZypAZp1TcmODXyjkhe9B7i2um316iL6yO4noUirY-KyX2rCFKo1-6AZrianWPaXaaoA5tbU2ZguoL1G-0azGwL1VNVD6Y46adpX5KaGUIZGHJqNscdNBi5t0M1tA5v5CKL4CIhG8OpEfNW3TeA57i3np-iISxtoG8zc8H61trwbw3WCS4p6xg5v5d9e~xE15oGCXJ7gG678mnNuJX8OpVdAFOTPhh7dXkbleZcv2sqQ3ES1T3qOez7awav5iTgkRWyUTWglT9tYTX40IJf7EBX-UD2ffpxovnI926qcAULaKaK-XOXxY9bag14~jRS3SdueUe4xKmjmg__";

interface VoteControllerProps {
  dispatch: React.Dispatch<{ type: string; payload: any }>;
  type: VoteType;
  onAgree?: () => void;
  onDisagree?: () => void;
}

export const handleVote = ({ dispatch, type, onAgree, onDisagree }: VoteControllerProps) => {
  dispatch({ type: "SET_VOTE_TYPE", payload: type });

  if (type === "GOOD") {
    onAgree?.();
  } else {
    onDisagree?.();
  }
};

export const getImageUrl = (): string => {
  return DEFAULT_IMAGE_URL;
};
