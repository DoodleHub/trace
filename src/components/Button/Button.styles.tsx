import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ $appearance: string }>`
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid #2f80ed;
  cursor: pointer;

  ${({ $appearance }) =>
    $appearance === "primary"
      ? css`
          background-color: #2f80ed;
          color: white;
        `
      : css`
          background-color: white;
          color: #2f80ed;
        `}
`;
