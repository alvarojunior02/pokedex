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
  GerericInfo,
  Content
} from './styles';

import iconArrow from '../../assets/icons/arrow.png';
import { ActivityIndicator } from 'react-native';

type Pokemon = {
  pokemon: {
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
}

import types from '../../config/typesOfPokemons';
import { FirstLetterToUpperCase } from '../../utils/FirstLetterToUpperCase';

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
      <Container
        style={{ backgroundColor: defineBackgroundColor()}}
      >
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
        <ContainerImages>
          <SpritePokemonImage source={{ uri: pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default }}/>
        </ContainerImages>
        <Content>
          <TextInfos>Infomations</TextInfos>
          <ContainerInfos>
              <GerericInfo>Name: {FirstLetterToUpperCase(pokemon.name)}</GerericInfo>
              <GerericInfo>Height: {pokemon.height}</GerericInfo>
              <GerericInfo>Weight: {pokemon.weight}</GerericInfo>
          </ContainerInfos>
        </Content>
      </Container>
    </>
  );
}

export default PokemonDetail;