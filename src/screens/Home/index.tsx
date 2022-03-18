import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import iconSearch from '../../assets/icons/search.png';

import {
  Container,
  Title,
  SearchContainer,
  SearchBar,
  ButtonSearch,
  IconSearch,
  ContainerButtons,
  TextButton,
  ButtonPokemons,
  ButtonTypes,
  ButtonAbilities,
  ButtonMoves,
  ButtonLocations
} from './styles';

const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Container>
        <Title>What Pokemon are you looking for?</Title>

        <SearchContainer>
          <SearchBar 
            value={search}
            onChangeText={newSearch => setSearch(newSearch)}
            placeholder={"Example: charmander"}
          />
          <ButtonSearch>
            <IconSearch source={iconSearch}/>
          </ButtonSearch>
        </SearchContainer>

        <Title>Navigate to:</Title>

        <ContainerButtons>
          <ButtonPokemons
            onPress={() => {
              navigation.navigate('Pokemons');
            }}
          >
            <TextButton>Pokemons</TextButton>
          </ButtonPokemons>
          <ButtonTypes>
            <TextButton>Types</TextButton>
          </ButtonTypes>
          <ButtonAbilities>
            <TextButton>Abilities</TextButton>
          </ButtonAbilities>
          <ButtonMoves>
            <TextButton>Moves</TextButton>
          </ButtonMoves>
          <ButtonLocations>
            <TextButton>Locations</TextButton>
          </ButtonLocations>
        </ContainerButtons>
      </Container>
    </>
  );
}

export default Home;