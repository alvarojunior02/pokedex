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
  top: 45%;
  left: 45%;
`;

export const ButtonLoadMore = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.RED_400};

  width: 160px;
  height: 60px;

  border-radius: 20px;

  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const TextLoadMore = styled.Text`
  align-self: center;

  color: white;

  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;