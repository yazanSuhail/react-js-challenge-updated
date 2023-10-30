import React from "react";
import { Card } from "./styles";
import { useModalParams } from "../../contexts/use-modal";
import { ICardProps } from "../../interfaces/ICardProps";

function GidCard({ url, width }: ICardProps) {
  const { handleParams } = useModalParams();

  const handleGifClick = () => {
    handleParams({
      data: [],
      isOpen: true,
    });
  };

  return (
    <Card>
      <img src={url} onClick={() => handleGifClick()} />
      <div>
        <h3>Width: {width} </h3>
        <p>
          cats captures a delightful moment of feline antics, distilling their
          charm and playfulness into a short, endlessly looping animation.
        </p>
      </div>
    </Card>
  );
}

export default GidCard;
