import React from "react";

import { CarouselImage, CarouselItemWrapper } from "./styles";
import { IItemProps } from "../../../interfaces/ICarouselProps";

const CarouselItem = ({ item }: IItemProps) => {
  const width = "100%";
  return (
    <CarouselItemWrapper style={{ width: width }}>
      <CarouselImage src={item.url} />
    </CarouselItemWrapper>
  );
};

export default CarouselItem;
