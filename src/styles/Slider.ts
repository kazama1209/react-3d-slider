import styled from "styled-components";
import Slider from "react-slick";

import * as colorCodes from "constants/colorCodes";

export const StyledSliderWrapper = styled.div`
  margin: 0 auto;
  height: 100%;

  .slick-dots {
    margin-top: 2rem;
    position: static;

    li button:before {
      color: ${colorCodes.SNOW};
    }

    li.slick-active button:before {
      color: ${colorCodes.SNOW};
    }
  }
`;

export const StyledSlider = styled(Slider)`
  background-color: ${colorCodes.BLACK};
  padding: 3rem;
`;

export const StyledSlideMask = styled.div`
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

export const StyledSlide = styled.div.attrs((props) => ({
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

  &.is-active ${StyledSlideMask} {
    opacity: 1;
  }
`;

export const StyledSlideImage = styled.img`
  width: 100%;
  border-radius: 0.5vw;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
`;

export const StyledSlideCaption = styled.div`
  font-size: 1.3vw;
  color: ${colorCodes.SNOW};
  padding: 0 1rem;
`;

interface StyledButtonWrapperProps {
  isNext?: boolean;
}

export const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
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

interface StyledButtonProps {
  isNext?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
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
