import styled from "styled-components";

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const CarouselItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 490px;
  background-color: #fff;
`;

export const CarouselItemText = styled.div`
  font-size: 1.15rem;
  margin: 40px 0 40px 0;
  padding: 0 20px 0 20px;
  white-space: normal;
  color: #617d98;
`;

export const CarouselImage = styled.img`
  width: 250px;
  padding: 0 20px 0 20px;
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  bottom: 48px;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 5rem;
  overflow: hidden;
  white-space: nowrap;

  &:before,
  &:after {
    content: " ... ";
  }
`;

export const IndicatorButton = styled.button`
  border: none;
  cursor: pointer;
`;

export const Indicator = styled.span`
  margin: 5px;
  background: none;
`;
