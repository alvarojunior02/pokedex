import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import iconSearch from '../../assets/icons/search.png';
import pokedexBackground from '../../../assets/icon.png'

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
  Subtitle,
  ImagePokedex
} from './styles';
import { Alert, ImageBackground } from 'react-native';

import Toast from 'react-native-toast-message';
import axios from 'axios';
import { PokemonImage } from '../../components/EvolutionPokemon/styles';

const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState("");

  const searchPokemon = async () => {
    await api.get(`/pokemon/${search.trim().toLowerCase()}`)
      .then(response => {
        if(response.status === 200) {
          setSearch("");
          axios.get(response.data.species.url)
            .then(responseSpecie => {
              axios.get(responseSpecie.data.evolution_chain.url)
                .then(responseEvo => {
                  navigateToPokemonDetail({
                    pokemon: response.data,
                    specie: responseSpecie.data,
                    evolutionChain: responseEvo.data
                  })
                })
            })
        }
      })
      .catch(error => {
        setSearch("");
        Alert.alert(
          "Oops!",
          "Pokémon not found, try other name.",
          [
            { text: "OK" }
          ]
        );
      })
  }

  const navigateToPokemonDetail = (
    {
      pokemon, 
      specie, 
      evolutionChain
    }: any
  ) => {
    navigation.navigate('PokemonDetail', {
      pokemon,
      specie,
      evolutionChain
    });
  }

  return (
    <>
      <Toast />
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
            <ImagePokedex 
              source={pokedexBackground}
              resizeMode={"cover"}
            />
          </Pokedex>
        </ContainerButtons>
      </Container>
    </>
  );
}

export default Home;