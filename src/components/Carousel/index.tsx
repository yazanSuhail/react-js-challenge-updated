import React, { useState } from "react";

import { CarouselWrapper, Inner, CarouselButtons, ButtonArrow } from "./styles";

import CarouselItem from "./CarouselItem";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IGifImageProps } from "../../interfaces/IGifThumbnailProps";

export const Carousel = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <CarouselWrapper>
      <Inner style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {data?.map((item: IGifImageProps, index: number) => (
          <span key={index}>
            <CarouselItem item={item.downsized} />
          </span>
        ))}
      </Inner>

      <CarouselButtons>
        <ButtonArrow
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}>
          <span>
            <ArrowBackIosNewIcon />
          </span>
        </ButtonArrow>

        <ButtonArrow
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}>
          <span>
            <ArrowForwardIosIcon />
          </span>
        </ButtonArrow>
      </CarouselButtons>
    </CarouselWrapper>
  );
};

export default Carousel;
