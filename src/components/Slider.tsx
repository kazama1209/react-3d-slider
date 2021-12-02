import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  StyledSliderWrapper,
  StyledMainSlider,
  StyledMainSlideMask,
  StyledMainSlide,
  StyledMainSlideImage,
  StyledMainSlideCaption,
  StyledArrowButtonWrapper,
  StyledArrowButton,
  StyledThumbnailSlider,
  StyledThumbnailSlide,
  StyledThumbnailSlideImage,
} from "styles/Slider";

import { Image } from "interfaces";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/* prev ボタン*/
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <StyledArrowButtonWrapper>
      <StyledArrowButton onClick={onClick}>&#8249;</StyledArrowButton>
    </StyledArrowButtonWrapper>
  );
};

/* next ボタン*/
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <StyledArrowButtonWrapper isNext={true}>
      <StyledArrowButton isNext={true} onClick={onClick}>
        &#8250;
      </StyledArrowButton>
    </StyledArrowButtonWrapper>
  );
};

interface SliderProps {
  images: Image[];
}
const Slider: React.FC<SliderProps> = ({ images }) => {
  /* 各種ブレイクポイント */
  // const isPcScreen: boolean = useMediaQuery({
  //   query: "(min-width: 1025px)",
  // });

  // const isTabletScreen: boolean = useMediaQuery({
  //   query: "(max-width: 1024px)",
  // });

  const isMobileScreen: boolean = useMediaQuery({
    query: "(max-width: 599px)",
  });

  const [imageIndex, setImageIndex] = useState<number>(0);

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);

  const [mainSlide, setMainSlide] = useState(null);
  const [thumbSlide, setThumbSlide] = useState(null);

  useEffect(() => {
    setMainSlider(mainSlide);
    setThumbSlider(thumbSlide);
  }, [mainSlide, thumbSlide]);

  const settingsMain = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // @ts-ignore
    beforeChange: (_, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null,
          nextArrow: null,
          dots: true,
        },
      },
    ],
  };

  const settingsThumbs = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "10%",
    swipeToSlide: true,
    focusOnSelect: true,
    // @ts-ignore
    beforeChange: (_, next) => setImageIndex(next),
  };

  return (
    <StyledSliderWrapper>
      {/* @ts-ignore */}
      <StyledMainSlider
        {...settingsMain}
        /* @ts-ignore */
        asNavFor={thumbSlider}
        /* @ts-ignore */
        ref={(mainSlide) => setMainSlide(mainSlide)}
      >
        {images.map((image, index) => (
          <StyledMainSlide
            key={image.id}
            className={index === imageIndex ? "is-active" : ""}
          >
            <StyledMainSlideImage
              src={image.webformatURL}
              alt={image.webformatURL}
            />
            <StyledMainSlideMask>
              <StyledMainSlideCaption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </StyledMainSlideCaption>
            </StyledMainSlideMask>
          </StyledMainSlide>
        ))}
      </StyledMainSlider>
      {!isMobileScreen && ( // スマホサイズの画面では非表示
        <StyledThumbnailSlider
          {...settingsThumbs}
          /* @ts-ignore */
          asNavFor={mainSlider}
          /* @ts-ignore */
          ref={(thumbSlide) => setThumbSlide(thumbSlide)}
        >
          {images.map((image, index) => (
            <StyledThumbnailSlide
              key={image.id}
              className={index === imageIndex ? "is-active" : ""}
            >
              <StyledThumbnailSlideImage
                src={image.webformatURL}
                alt={image.webformatURL}
              />
            </StyledThumbnailSlide>
          ))}
        </StyledThumbnailSlider>
      )}
    </StyledSliderWrapper>
  );
};

export default Slider;
