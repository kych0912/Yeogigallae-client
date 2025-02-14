import Skeleton from "../../../../components/Skeleton";
import Card from "./../../../../components/Card";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Vote.styles";
import { CustomSkeleton } from "./SkeletonStyles.ts";

export default function SkeletonTravelCard() {
  return (
    <Card>
      <Card.Image>
        <CustomSkeleton variant="rectangular" width="100%" height="100%" />
      </Card.Image>
      <S.StyledCardTitle>
        <Skeleton variant="text" width="100%" height="2rem"/>
      </S.StyledCardTitle>
      <Card.Divider />
      <S.StyledItem>
        <Card.Item label="장소">
          <Skeleton variant="text" width="6rem" height="1.25rem" />
        </Card.Item>
        <Card.Item label="금액">
        <Skeleton variant="text" width="6rem" height="1.25rem" />
        </Card.Item>
        <Card.Item label="기간">
        <Skeleton variant="text" width="6rem" height="1.25rem" />
        </Card.Item>
      </S.StyledItem>
      <Button size="large" disabled>
        <Skeleton variant="rectangular" width="100%" />
      </Button>
    </Card>
  );
}
