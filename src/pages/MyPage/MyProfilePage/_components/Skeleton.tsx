import Skeleton from "../../../../components/Skeleton";
import * as S from './Profile.style';

export default function MyProfileSkeleton() {
    return (
        <>
            <S.UserProfile.Container>
                <Skeleton 
                    variant="circle"

                    width="5rem"
                    height="5rem"
                />
                <S.UserProfile.NameContainer>
                    <Skeleton 
                        variant="text"
                        width="120px"
                        height="2rem"
                    />
                    <Skeleton 
                        variant="text"
                        width="180px"
                        height="0.875rem"
                    />
                </S.UserProfile.NameContainer>
            </S.UserProfile.Container>

            <S.ServiceSetting.Container>
                <Skeleton 
                    variant="text"
                    width="100px"
                    height="1rem"
                />
                {[...Array(4)].map((_, index) => (
                    <Skeleton 
                        key={index}
                        variant="text"
                        width="100%"
                        height="2rem"
                    />
                ))}
            </S.ServiceSetting.Container>
        </>
    );
}