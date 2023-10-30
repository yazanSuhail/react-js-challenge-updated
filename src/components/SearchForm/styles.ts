import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Input = styled.input`
  height: 44px;
  width: 100%;
  padding: 0 20px;
  background: transparent;
  border: 1px solid black;
  color: black;
`;

export const Button = styled.button`
  background-color: #0f62fe;
  color: #ffffff;
  padding: 15px 15px 15px 16px;
  border: 1px solid #0f62fe;
  cursor: pointer;
  font-family: "ibm-plex-sans", sans-serif;
  border-radius: 0;
  border-right: 1px solid #fff;
  text-align: inherit;
  min-height: 48px;
  max-height: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.16px;
`;
