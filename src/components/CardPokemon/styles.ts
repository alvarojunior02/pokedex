import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-top: 40px;
  margin-bottom: 20px;

  align-self: center;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  box-shadow: 2px 2px 2px black;

  width: 160px;
  height: 210px;

  box-shadow: 2px 2px 2px black;

  border-radius: 20px;
`;

export const TextID = styled.Text`
  align-self: flex-start;

  font-size: 20px;
  color: black;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const Image = styled.Image`
  align-self: center;

  margin-top: -50px;

  width: 140px;
  height: 140px;
`;

export const TextName = styled.Text`
  align-self: flex-start;

  font-size: 22px;
  color: black;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerTypes = styled.View`
  margin-top: 5px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TypeContent = styled.View`
  height: 30px;

  border: 1px solid black;

  padding: 0 6px;
  margin: 0 4px;
  border-radius: 10px;
`;

export const TextTypeContent = styled.Text`
  align-self: center;

  font-size: 18px;
  color: black;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
