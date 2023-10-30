import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-top: 5rem;
  margin: 0 auto;
  > div {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
