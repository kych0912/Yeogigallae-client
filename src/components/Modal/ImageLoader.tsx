import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Skeleton from "../Skeleton";

const ImageWrapper = styled.div<{ selected: boolean }>`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  
  ${props => props.selected && css`
    outline: 3px solid #3b82f6;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function ImageLoader({ src, alt, selected, onClick }:{
    src: string;
    alt: string;
    selected: boolean;
    onClick: () => void;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
      setIsLoading(false);
    };
  
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    useEffect(() => {
        setIsLoading(true);
    }, []);

    useEffect(() => {
        setIsLoading(true);
    }, [src]);
    
    return (
      <ImageWrapper selected={selected} onClick={onClick}>
        {isLoading && (
            <Skeleton variant="rectangular" width="100%" height="100%" />
        )}
        
        {hasError ? (
            <div style={{ color: 'white' }}>Error</div>
        ) : (
          <StyledImage
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </ImageWrapper>
    );
  };
