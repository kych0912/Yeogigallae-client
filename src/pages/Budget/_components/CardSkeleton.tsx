import styled from "styled-components";
import Card from "../../../components/Card";
import Skeleton from "../../../components/Skeleton";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
    width: 100%;
    padding: 1rem;
`;

//예산 카드 스켈레톤
export function CardSkeleton() {
    return (
        <Card>
            <Card.Item>
                <Box>
                    <Skeleton variant="text" width="180px" height="20px" />
                    <Skeleton variant="text" width="100%" height="40px" />
                    <Card.Divider />
                    <Skeleton variant="text" width="180px" height="20px" />
                </Box>
            </Card.Item>
            <Card.Image>
                <Skeleton variant="rectangular" width="100%" height="240px" />
            </Card.Image>

            <Card.Item>
                <Skeleton variant="text" width="150px" height="16px" />
                <Skeleton variant="text" width="200px" height="20px" />
                <Card.Divider />
                <Skeleton variant="text" width="150px" height="16px" />
                <Skeleton variant="text" width="200px" height="20px" />
            </Card.Item>
        </Card>
    );
}

//예산 정보 카드 스켈레톤
export function InfoCardSkeleton() {
    return (
        <Card>
            <Card.Item>
                <Skeleton variant="text" width="240px" height="70px" />
            </Card.Item>
            <Card.Item>
                <Skeleton variant="text" width="100%" height="40px" />
                <Card.Divider />
                <Skeleton variant="text" width="100%" height="40px" />
                <Card.Divider />
                <Skeleton variant="text" width="100%" height="40px" />
            </Card.Item>
        </Card>
    );
}
