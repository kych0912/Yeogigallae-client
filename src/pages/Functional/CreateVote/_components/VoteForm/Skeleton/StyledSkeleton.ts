import styled from "styled-components";
import Skeleton from "../../../../../../components/Skeleton";

interface StyledSkeletonProps {
  smallwidth?: boolean;
  fullwidth?: boolean;
  fullcontent?: boolean;
  buttonwidth?: boolean;
  mediumwidth?: boolean;
  fullImage?: boolean;
  slidewidth?: boolean;
}

const getWidth = (props: StyledSkeletonProps) => {
  if (props.fullwidth || props.fullcontent || props.fullImage) return "100%";
  if (props.buttonwidth) return "5.25rem";
  if (props.mediumwidth) return "2.5rem";
  if (props.slidewidth) return "2.688rem";
  if (props.smallwidth) return "2.75rem";
  return "1.75rem";
};

const getHeight = (props: StyledSkeletonProps) => {
  if (props.fullwidth) return "1.25rem";
  if (props.fullcontent) return "5rem";
  if (props.fullImage) return "12.5rem";
  if (props.buttonwidth) return "2.25rem";
  if (props.mediumwidth) return "1rem";
  if (props.slidewidth) return "2.5rem";
  if (props.smallwidth) return "0.75rem";
  return "1.75rem";
};

export const StyledSkeleton = styled(Skeleton).withConfig({
  shouldForwardProp: (prop) =>
    !["smallwidth", "fullwidth", "fullcontent", "buttonwidth", "mediumwidth", "fullImage", "slidewidth"].includes(prop),
}).attrs<StyledSkeletonProps>((props) => ({
  width: getWidth(props),
  height: getHeight(props),
}))`
  display: block;
  ${({ buttonwidth }) => buttonwidth && "border-radius: 50px; oveflow-x: auto;"}
  ${({ fullImage }) => fullImage && "border-radius: 24px;"}
  ${({ slidewidth }) => slidewidth && "border-radius: 1rem;"}
`;
