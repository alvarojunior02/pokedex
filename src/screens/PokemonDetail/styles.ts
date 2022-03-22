import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: 20px;

  width: 100%;

  justify-content: flex-start;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 25px;
  margin-left: 10px;

  left: 0;

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

export const ContainerImages = styled.View`
  justify-content: center;
  align-items: center;

  border-radius: 200px;
  width: 80%;
`;

export const SpritePokemonImage = styled.Image`
  width: 250px;
  height: 250px;

  border-radius: 20px;

  margin: 20px;
`;

export const Description = styled.Text`
  
`;

export const TextInfos = styled.Text`
  margin: 20px 0;

  align-self: flex-start;
  margin-left: 40px;

  font-size: 26px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerInfos = styled.ScrollView`
  flex: 1;

  width: 100%;
`;

export const GerericInfo = styled.Text`
  align-self: flex-start;
  margin-left: 40px;
  margin-top: 10px;

  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;