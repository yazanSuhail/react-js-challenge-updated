import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  place-items: center;
  div {
    position: relative;
    right: -19px;
    max-width: 12rem;
  }

  img {
    border-radius: 1rem;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
  }
`;
