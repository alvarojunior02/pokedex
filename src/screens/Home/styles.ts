import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-top: 35px;

  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.TextInput`
  margin-top: 15px;
  margin-right: 15px;

  width: 70%;
  height: 60px;

  padding-left: 20px;

  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border: none;
`;

export const IconSearch = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ContainerButtons = styled.View`
  margin-top: 30px;

  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  margin-top: 25px;

  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const TextButton = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: white;

  align-self: center;

  text-shadow: 1px 1px 1px black;
`;

export const Pokedex = styled.TouchableOpacity`
  width: 250px;
  height: 250px;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

export const ImagePokedex = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ButtonPokemons = styled.TouchableOpacity`
  width: 90%;
  height: 60px;

  justify-content: center;
  align-items: center;

  margin: 10px;

  border-radius: 20px;

  border: 2px solid black;
  background-color: ${({ theme }) => theme.COLORS.RED_400};
`;

export const ButtonTypes = styled.TouchableOpacity`
  width: 90%;
  height: 60px;

  justify-content: center;
  align-items: center;

  margin: 10px;

  border-radius: 20px;

  border: 2px solid black;
  background-color: ${({ theme }) => theme.COLORS.GREEN_400};
`;

export const ButtonAbilities = styled.TouchableOpacity`
  width: 90%;
  height: 60px;

  justify-content: center;
  align-items: center;

  margin: 10px;

  border-radius: 20px;

  border: 2px solid black;
  background-color: ${({ theme }) => theme.COLORS.BLUE_400};
`;

export const ButtonMoves = styled.TouchableOpacity`
  width: 90%;
  height: 60px;

  justify-content: center;
  align-items: center;

  margin: 10px;

  border-radius: 20px;

  border: 2px solid black;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_400};
`;

export const ButtonLocations = styled.TouchableOpacity`
  width: 90%;
  height: 60px;

  justify-content: center;
  align-items: center;

  margin: 10px;

  border-radius: 20px;

  border: 2px solid black;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_400};
`;