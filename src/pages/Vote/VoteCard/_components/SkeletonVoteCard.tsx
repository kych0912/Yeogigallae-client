import Skeleton from "../../../../components/Skeleton";
import Card from "../../../../components/Card";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Vote.styles";
import { CustomSkeleton } from "../../Travel/_components/SkeletonStyles";

export default function VoteSkeleton() {
  return (
    <Card>
      <Card.Image>
        <CustomSkeleton variant="rectangular" width="100%" height="100%" />
      </Card.Image>

      <S.CustomWrapper>
        <Card.Item label="장소">
          <Skeleton variant="text" width="3.75rem" height="1.5rem"/>
          <Skeleton variant="text" width="100%" height="1.5rem" />
        </Card.Item>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">
        <Skeleton variant="text" width="100%" height="1.5rem"/>
      </Card.Item>

      <Card.Divider />
      <Card.Item label="기간">
        <Skeleton variant="text" width="100%" height="1.5rem"/>
      </Card.Item>

      <S.CustomSpacer />
      <S.TwoSelect>
        <Button size="large" disabled>
          <Skeleton variant="text" width="100%" />
        </Button>
        <Button size="large" disabled>
          <Skeleton variant="text" width="100%" />
        </Button>
      </S.TwoSelect>
    </Card>
  );
}
