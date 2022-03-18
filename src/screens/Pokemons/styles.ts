import styled from "styled-components/native";

export const Container = styled.ScrollView`
  margin-top: 20px;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;