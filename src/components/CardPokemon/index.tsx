import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

interface IProps {
  url: string;
  navigation: any;
}

import types from '../../config/typesOfPokemons';
import { FirstLetterToUpperCase } from '../../utils/FirstLetterToUpperCase';

import {
  Container,
  TextID,
  Image,
  TextName,
  ContainerTypes,
  TypeContent,
  TextTypeContent,
} from './styles';

type Pokemon = {
  id: number,
  name: string,
  description: string,
  height: number,
  weight: number,
  sprites: {
    front_default: string,
    other: any,
  },
  types: [
    {
      type: {
        name: string,
        url: string
      }
    }
  ]
}

const CardPokemon = ({url, navigation}: IProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    await axios.get(url)
      .then(response => {
        setPokemon(response.data);
      });
  }

  const defineBackgroundColor = (type?: string) => { 
    let color = "white";

    if (type) {
      types.map(item => {
        if(item.type === type) {
          color = item.color;
        }
      })
    } else {
      types.map(item => {
        pokemon?.types.map(poke => {
          if(item.type === poke.type.name) {
            color = item.color;
          }
        })
      })
    }
    
    

    return color
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Container
        style={{  backgroundColor: defineBackgroundColor() }}
        onPress={() => {
          navigation.navigate("PokemonDetail", {
            pokemon: pokemon
          });
        }}
      >
        <Image source={{ uri: pokemon?.sprites.other["official-artwork"].front_default || pokemon?.sprites.front_default }}/>
        <TextID>#{pokemon?.id}</TextID>
        <TextName>{FirstLetterToUpperCase(pokemon?.name || "...")}</TextName>
        <ContainerTypes>
          {
            pokemon?.types.map(item => {
                  return <TypeContent
                      style={{  backgroundColor: defineBackgroundColor(item.type.name) }}
                    >
                      <TextTypeContent>{FirstLetterToUpperCase(item.type.name)}</TextTypeContent>
                    </TypeContent>
            })
          }
        </ContainerTypes>
      </Container>
    </>
  );
}

export default CardPokemon;