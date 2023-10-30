import React, { useState } from "react";
import { useModalParams } from "../../contexts/use-modal";
import {
  CloseBtnContainer,
  ModalContainer,
  CloseBtn,
  InnerContent,
} from "./styles";
import Carousel from "../Carousel";

const SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

function Modal(data: any) {
  const { params, handleParams } = useModalParams();

  return (
    params.isOpen && (
      <ModalContainer>
        <InnerContent>
          <CloseBtnContainer>
            <CloseBtn onClick={() => handleParams({ data: [], isOpen: false })}>
              {SVG}
            </CloseBtn>
          </CloseBtnContainer>
          <Carousel data={data?.data} />
        </InnerContent>
      </ModalContainer>
    )
  );
}

export default Modal;
