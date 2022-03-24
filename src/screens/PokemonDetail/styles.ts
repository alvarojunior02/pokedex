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
  color: black;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  width: 60%;
`;

export const TypeContent = styled.View`
  height: 30px;
  
  border: 1px solid black;
  padding: 0 10px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const TypeName = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerImages = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const SpritePokemonImage = styled.Image`
  width: 250px;
  height: 250px;

  margin: 25px 0;
`;

export const PokemonName = styled.Text`
  margin-bottom: 20px;

  align-self: center;

  font-size: 36px;
  color: white;
  text-shadow: 1px 1px 1px gray;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Description = styled.Text`
  margin-top: 20px;

  align-self: flex-start;
  margin-left: 40px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const TextInfos = styled.Text`
  margin-top: 20px;
  margin-left: 40px;

  width: 100%;

  font-size: 26px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ContainerInfos = styled.View`
  flex: 1;

  width: 100%;
`;

export const ContainerInfoText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GerericInfo = styled.Text`
  width: 35%;

  align-self: flex-start;
  margin-left: 40px;
  margin-top: 10px;

  font-size: 18px;
  color: black;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const GenericLabel = styled.Text`
  width: 55%;

  align-self: flex-start;
  margin-left: 40px;
  margin-top: 10px;

  font-size: 18px;
  color: gray;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerStats = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentStatName= styled.View`
  width: 30%;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StatName = styled.Text`
  align-self: flex-start;
  margin-left: 40px;
  margin-top: 10px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContentStatBar = styled.View`
  width: 50%;

  margin-top: 15px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentStatValue = styled.View`
  width: 20%;

  margin-top: 15px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StatValue = styled.Text`
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 10px;

  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;