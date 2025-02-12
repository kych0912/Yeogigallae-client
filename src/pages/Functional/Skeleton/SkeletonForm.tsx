import { ReactNode, useEffect, useState } from "react";
import { StyledSkeleton, ParentContainer } from "./StyledSkeleton";

interface SkeletonFormProps {
  children: ReactNode;
  fullwidth?: boolean;
  fullcontent?: boolean;
  buttonwidth?: boolean;
  mediumwidth?: boolean;
  fullImage?: boolean;
  slidewidth?: boolean;
  smallwidth?: boolean;
  variant?: "circle" | "rectangular" | "text";
}

let globalLoadingState = false;
const subscribers: Array<React.Dispatch<React.SetStateAction<boolean>>> = [];

export function setGlobalLoadingState(value: boolean) {
  globalLoadingState = value;
  subscribers.forEach((setState) => setState(value));
}

export default function SkeletonForm({
  children,
  fullwidth,
  fullcontent,
  buttonwidth,
  mediumwidth,
  fullImage,
  slidewidth,
  smallwidth,
  variant,
}: SkeletonFormProps) {
  const [loading, setLoading] = useState(globalLoadingState); 
  useEffect(() => {
    if (!subscribers.includes(setLoading)) {
      subscribers.push(setLoading);
    }

    setLoading(globalLoadingState);

    return () => {
      const index = subscribers.indexOf(setLoading);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  }, []);

  useEffect(() => {
    if (globalLoadingState) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(false);
      }); 
    }
  }, [globalLoadingState]); 

  return loading ? (
    <ParentContainer>
      <StyledSkeleton
        fullwidth={fullwidth}
        fullcontent={fullcontent}
        buttonwidth={buttonwidth}
        mediumwidth={mediumwidth}
        fullImage={fullImage}
        slidewidth={slidewidth}
        smallwidth={smallwidth}
        variant={variant}
      />
    </ParentContainer>
  ) : (
    children
  );
}
