import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerPublications = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  height: 350px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.textPrimary};
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PublicationImage = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 15px;
`;
