import styled from "styled-components";
import Slider from "react-slick";

import * as colorCodes from "constants/colorCodes";

export const StyledSliderWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: ${colorCodes.BLACK};

  .slick-dots {
    position: static;

    li button:before {
      color: ${colorCodes.SNOW};
    }

    li.slick-active button:before {
      color: ${colorCodes.SNOW};
    }
  }
`;

export const StyledMainSlider = styled(Slider)`
  padding: 3rem;
`;

export const StyledMainSlideMask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.4s ease;
  transition: all 2s ease;
  opacity: 0;
`;

export const StyledMainSlide = styled.div.attrs((props) => ({
  className: props.className,
}))`
  transform: scale(0.4);
  transition: transform 300ms;
  opacity: 0.5;
  border-radius: 0.5vw;
  position: relative;

  &.is-active {
    transform: scale(1);
    opacity: 1;
  }

  &.is-active ${StyledMainSlideMask} {
    opacity: 1;
  }
`;

export const StyledMainSlideImage = styled.img`
  width: 100%;
  border-radius: 0.5vw;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
`;

export const StyledMainSlideCaption = styled.div`
  font-size: 1.3vw;
  color: ${colorCodes.SNOW};
  padding: 0 1rem;
`;

interface ArrowButtonProps {
  isNext?: boolean;
}

export const StyledArrowButtonWrapper = styled.div<ArrowButtonProps>`
  ${({ isNext = false }) => `
    position: absolute;
    border-radius: ${isNext ? "0.5vw 0 0 0.5vw" : "0 0.5vw 0.5vw 0"};
    box-sizing: border-box;
    top: 0;
    ${isNext ? "right: 0;" : "left: 0;"};
    width: 55px;
    height: 100%;
  `}
`;

export const StyledArrowButton = styled.button<ArrowButtonProps>`
  ${({ isNext = false }) => `
    display: block;
    background: transparent;
    border: 0;
    border-radius: ${isNext ? "0.5vw 0 0 0.5vw" : "0 0.5vw 0.5vw 0"};
    top: 0;
    width: 100%;
    height: 100%;
    color: ${colorCodes.SNOW};
    font-size: 3rem;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;

    :hover {
      opacity: 0.5;
    }
  `}
`;

export const StyledThumbnailSlider = styled(Slider)`
  padding: 0;
`;

export const StyledThumbnailSlide = styled.div.attrs((props) => ({
  className: props.className,
}))`
  transition: transform 300ms;
  filter: brightness(0.5);

  &.is-active {
    transform: scale(1);
    filter: brightness(1);
  }
`;

export const StyledThumbnailSlideImage = styled.img`
  width: 100%;
`;
