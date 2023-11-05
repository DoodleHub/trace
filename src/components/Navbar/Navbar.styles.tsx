import styled from "styled-components";

export const Wrapper = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 48px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
