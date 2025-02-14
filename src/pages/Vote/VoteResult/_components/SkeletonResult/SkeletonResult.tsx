import Skeleton from "../../../../../components/Skeleton";
import Card from "../../../../../components/Card";
import { Button } from "../../../../../components/Button";
import * as S from "../../../_components/Vote.styles";
import { CustomSkeleton, CustomBarSkeleton } from "../../../Travel/_components/SkeletonStyles";

export default function ResultSkeleton() {
  return (
    <Card>
      <Skeleton variant="text" width="12.5rem" height="1.5rem" />
      <Card.Item label="기간">
        <Skeleton variant="text" width="100%" height="1.5rem" />
      </Card.Item>

      <CustomBarSkeleton variant="text" width="100%" height="2.8rem" />
      <CustomBarSkeleton variant="text" width="100%" height="2.8rem" />
      
      <Card.Divider />
      
      <CustomSkeleton variant="rectangular" width="100%" height="200px" />

      <S.StyledCardTitle>
        <Skeleton variant="text" width="100%" height="2.5rem"/>
      </S.StyledCardTitle>

      <Card.Divider />

      <S.CustomWrapper>
        <S.CustomCardItem label="장소">
          <Skeleton variant="text" width="5rem" height="1.5rem"/>
          <Skeleton variant="text" width="100%" height="1.5rem"/>
        </S.CustomCardItem>
        <S.IconWrapper>
          <Skeleton variant="rectangular" width="1.5rem" height="1.5rem" />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">
        <Skeleton variant="text" width="100%" height="1.5rem"/>
      </Card.Item>

      <Button
        size="large"
        disabled
        style={{
          backgroundColor: "#434343",
          color: "white",
          marginTop: "0.75rem",
        }}
      >
        <Skeleton variant="rectangular" width="100%" />
      </Button>
    </Card>
  );
}
