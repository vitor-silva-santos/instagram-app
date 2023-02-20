import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  color: ${(props) => props.theme.textPrimary};

  .color {
    color: red;
    transition: 0.1s;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    opacity: 0.7;
  }
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
