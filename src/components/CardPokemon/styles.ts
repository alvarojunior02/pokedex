import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 20px;

  align-self: center;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  width: 160px;
  height: 200px;

  border: 2px solid black;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextID = styled.Text`
  align-self: flex-end;

  font-size: 20px;
  color: black;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const Image = styled.Image`
  align-self: center;

  width: 100px;
  height: 100px;
`;

export const TextName = styled.Text`
  align-self: center;

  font-size: 24px;
  color: black;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
