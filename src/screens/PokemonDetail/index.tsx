import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { 
  Container,
  BackButton,
  BackIcon,
  Title,
  ContainerImages,
  SpritePokemonImage,
  Header,
  ContainerInfos,
  TextInfos,
  GerericInfo
} from './styles';

import iconArrow from '../../assets/icons/arrow.png';
import { ActivityIndicator } from 'react-native';

type Pokemon = {
  pokemon: {
    id: number,
    name: string,
    description: string,
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
}

import types from '../../config/typesOfPokemons';

const PokemonDetail = ({ route, navigation }: any) => {
  const { pokemon }: Pokemon = route.params;

  const defineBackgroundColor = () => {
    let color = "white";
    
    types.map(item => {
      pokemon.types.map(poke => {
        if(item.type === poke.type.name) {
          color = item.color;
        }
      })
    })

    return color
  }

  return (
    <>
      <Container>
        <Header>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon source={iconArrow}/>
          </BackButton>

          <Title>Detail</Title>
        </Header>
        <ContainerImages
          style={{ backgroundColor: defineBackgroundColor()}}
        > 
          <SpritePokemonImage source={{ uri: pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default }}/>
        </ContainerImages>
        <TextInfos>Infomations</TextInfos>
        <ContainerInfos>
            <GerericInfo>Name: {pokemon.name}</GerericInfo>
            <GerericInfo>Weight: {pokemon.weight}</GerericInfo>
        </ContainerInfos>
      </Container>
    </>
  );
}

export default PokemonDetail;