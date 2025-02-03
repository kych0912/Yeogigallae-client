import styled from 'styled-components';
import Card from '../../../components/Card';
import CommonContainer from '../../../components/Layout/CommonContainer';
import Skeleton from '../../../components/Skeleton';

const SkeletonWrapper = styled.div`
  &.space-y-2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  &.space-y-4 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const PlaceItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const PlaceContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

export default function CourseOverviewCardSkeleton(){
  return (
    <CommonContainer>
      <Card>
        {/* Map skeleton */}
        <Card.Image>
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="240px"
          />
        </Card.Image>

        {/* Title section skeleton */}
        <Card.Item>
          <SkeletonWrapper className="space-y-2">
            <Skeleton variant="text" width="100px" height="20px" />
            <Skeleton variant="text" width="200px" height="24px" />
          </SkeletonWrapper>
        </Card.Item>

        {/* Places section skeleton */}
        <Card.Item>
          <SkeletonWrapper className="space-y-4">
            {[1, 2, 3].map((index) => (
              <PlaceItemWrapper key={index}>
                <Skeleton variant="circle" width="32px" height="32px" />
                <PlaceContentWrapper>
                  <Skeleton variant="text" width="140px" height="20px" />
                  <Skeleton variant="text" width="100px" height="16px" />
                </PlaceContentWrapper>
              </PlaceItemWrapper>
            ))}
          </SkeletonWrapper>
        </Card.Item>

        {/* Button skeleton */}
        <Card.Item>
          <ButtonWrapper>
            <Skeleton variant="rectangular" width="100%" height="48px" />
          </ButtonWrapper>
        </Card.Item>
      </Card>
    </CommonContainer>
  );
};