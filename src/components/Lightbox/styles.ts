import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const CloseBtnContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InnerContent = styled.div`
  z-index: 11;
  border-radius: 5px;
  width: 80%;
  height: 70%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CloseBtn = styled.button`
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  color: #26589f;
  cursor: pointer;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  margin: 1rem 1rem 1rem 1rem;
  align-self: flex-end;
`;

export const ListBox = styled.div`
  position: relative;
  height: 10rem;
  display: flex;
  align-self: center;
  margin-top: auto;
  padding: 3rem 0 2rem 0;
  img {
    display: flex;
    justify-content: center;
    margin: 0 1rem 0 1rem;
  }
`;

export const PaginationButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const PaginationButtons = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    width: 5rem;
  }
`;
