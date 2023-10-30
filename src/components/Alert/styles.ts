import styled from "styled-components";

export const SlideInPanel = styled.div`
  position: fixed;
  top: 50px;
  width: 300px;
  height: 3rem;
  background-color: #fff;
  box-shadow: -3px 0 6px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  margin: 20px;
  border-radius: 10px;
`;

export const SlideInContent = styled.div`
  padding: 17px 10px 20px 10px;
`;
