import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: -32px;
  display: flex;
  gap: 10px;
  width: 1030px;
  height: 64px;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);

  input {
    display: flex;
    flex: 1;
    padding: 11px 12px 12px 12px;
    align-items: center;
    border: none;
    border-radius: 4px;
    background-color: #f2f2f2;
  }
`;
