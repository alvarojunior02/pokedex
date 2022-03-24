import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import iconSearch from '../../assets/icons/search.png';
import pokedexBackground from '../../../assets/splash.png'

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
  ButtonLocations,
  Pokedex,
  Subtitle
} from './styles';
import { ImageBackground } from 'react-native';

const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState("");

  const searchPokemon = async () => {
    await api.get(`/pokemon/${search.trim().toLowerCase()}`)
      .then(response => {
        if(response.status === 200) {
          setSearch("");
          navigation.navigate('PokemonDetail', {
            pokemon: response.data
          });
        } else {

        }
      })
  }

  return (
    <>
      <Container>
        <Title>What Pokemon are you looking for?</Title>

        <SearchContainer>
          <SearchBar 
            value={search}
            onChangeText={newSearch => setSearch(newSearch)}
            placeholder={"Example: Charmander"}
          />
          <ButtonSearch
            onPress={() => {
              searchPokemon();
            }}
          >
            <IconSearch source={iconSearch}/>
          </ButtonSearch>
        </SearchContainer>
        <Subtitle>Open Pokedex List:</Subtitle>
        <ContainerButtons>
          <Pokedex
            onPress={() => {
              navigation.navigate('Pokemons');
            }}
          >
            <ImageBackground 
              source={pokedexBackground}
              resizeMode={"contain"}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center"
              }}
              borderRadius={20}
            />
          </Pokedex>
        </ContainerButtons>
      </Container>
    </>
  );
}

export default Home;