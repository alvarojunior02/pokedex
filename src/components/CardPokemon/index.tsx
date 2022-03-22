import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

interface IProps {
  url: string;
  navigation: any;
}

import types from '../../config/typesOfPokemons';

import {
  Container,
  TextID,
  Image,
  TextName,
} from './styles';

type Pokemon = {
  id: number,
  name: string,
  sprites: {
    front_default: string,
    other: any
  },
  types: [
    {
      type: {
        name: string,
        url: string
      }
    }
  ],
  image: string
}

const CardPokemon = ({url, navigation}: IProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    await axios.get(url)
      .then(response => {
        setPokemon(response.data);
      });
  }

  const defineBackgroundColor = () => { 
    let type = "t";   
    let color = "white";
    
    types.map(item => {
      pokemon?.types.map(poke => {
        if(item.type === poke.type.name) {
          color = item.color;
        }
      })
    })

    return color
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Container
        style={{ backgroundColor: defineBackgroundColor()}}
        onPress={() => {
          navigation.navigate("PokemonDetail", {
            pokemon: pokemon
          });
        }}
      >
        <TextID>#{pokemon?.id}</TextID>
        <Image source={{ uri: pokemon?.sprites.other["official-artwork"].front_default || pokemon?.sprites.front_default }}/>
        <TextName>{pokemon?.name}</TextName>
      </Container>
    </>
  );
}

export default CardPokemon;