import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  StyledSliderWrapper,
  StyledSlider,
  StyledSlideMask,
  StyledSlide,
  StyledSlideImage,
  StyledSlideCaption,
  StyledButtonWrapper,
  StyledButton,
} from "styles/Slider";

import { Image } from "interfaces";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/* prev ボタン*/
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={onClick}>&#8249;</StyledButton>
    </StyledButtonWrapper>
  );
};

/* next ボタン*/
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <StyledButtonWrapper isNext={true}>
      <StyledButton isNext={true} onClick={onClick}>
        &#8250;
      </StyledButton>
    </StyledButtonWrapper>
  );
};

interface SliderProps {
  images: Image[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const options = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // @ts-ignore
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <StyledSliderWrapper>
      {/* @ts-ignore */}
      <StyledSlider {...options}>
        {images.map((image, index) => (
          <StyledSlide
            key={image.id}
            className={index === imageIndex ? "is-active" : ""}
          >
            <StyledSlideImage
              src={image.webformatURL}
              alt={image.webformatURL}
            />
            <StyledSlideMask>
              <StyledSlideCaption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </StyledSlideCaption>
            </StyledSlideMask>
          </StyledSlide>
        ))}
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

export default Slider;
