import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 338px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 25px;

  ${(props) => css`
    background-color: ${props.theme.primary};
    border: ${`1px solid ${props.theme.primary}`};
    box-shadow: ${`9px 0px 33px 39px ${props.theme.boxShadow}`};
  `}
`;

export const BtnTheme = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: ${(props) => props.theme.textPrimary};

  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );

  img {
    width: 83px;
    border-radius: 50%;
  }
`;

export const ListIcon = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 24px;
  color: ${(props) => props.theme.textPrimary};
  font-weight: 400;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: ${(props) => `1px solid ${props.theme.divider}`};
`;
