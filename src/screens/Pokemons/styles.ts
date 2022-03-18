import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  margin-top: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 25px;
  margin-left: 10px;

  width: 40px;
  height: 40px;

  position: absolute;

  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  margin: 20px 0;

  align-self: center;

  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ContainerCards = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Loader = styled.ActivityIndicator`
  position: absolute;
  bottom: 0;
  left: 45%;
`;