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
  Content,
  ContentStatName,
  ContentStatBar,
  ContainerStats,
  StatName,
  ContentStatValue,
  Description,
  StatValue,
  ContainerTypes,
  TypeContent,
  TypeName,
  ContainerInfoText,
  GenericLabel,
  PokemonName
} from './styles';

import iconArrow from '../../assets/icons/arrow.png';
import pokeballBack from '../../assets/pokeball.svg';
import { ActivityIndicator, ImageBackground } from 'react-native';

type Pokemon = {
  pokemon: {
    id: number,
    name: string,
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
    ],
    stats: [
      {
        base_stat: number,
        stat: {
          name: string,
          url: string,
        }
      }
    ],
    species: {
      name: string,
      url: string
    }
  }
}

type SpecieType = {
  flavor_text_entries: [
    {
      flavor_text: string;
      version: {
        name: string;
      }
    }
  ],
  base_happiness: number,
  capture_rate: number,
  color: {
    name: string;
    url: string;
  },
}

import types from '../../config/typesOfPokemons';
import { FirstLetterToUpperCase } from '../../utils/FirstLetterToUpperCase';
import StatBar from '../../components/StatBar';
import axios from 'axios';

const PokemonDetail = ({ route, navigation }: any) => {
  const { pokemon }: Pokemon = route.params;
  const [specie, setSpecie] = useState<SpecieType>();

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

  const getSpecie = () => {
    axios.get(pokemon.species.url)
      .then(response => {
        setSpecie(response.data);
      })
  }

  useEffect(() => {
    getSpecie();
  }, []);

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

        <ContainerTypes>
          {
            pokemon.types.map(item => {
              return <>
                <TypeContent
                  style={{ backgroundColor: defineBackgroundColor(item.type.name) }}
                >
                  <TypeName>
                    {FirstLetterToUpperCase(item.type.name)}
                  </TypeName>
                </TypeContent>
              </>
            })
          }
        </ContainerTypes>

        <ContainerImages>
          <SpritePokemonImage source={{ 
            uri: 
              pokemon.sprites.other["official-artwork"].front_default || 
              pokemon.sprites.front_default 
          }}/>
        </ContainerImages>
        
        <PokemonName>
          {FirstLetterToUpperCase(pokemon.name)}
        </PokemonName>

        <Content>
          <Description>
            {
              specie?.flavor_text_entries.map(item => {
                if(item.version.name === "firered") {
                  return item.flavor_text;
                }
              })
            }
          </Description>
          <TextInfos
            style={{ color: specie?.color.name}}
          >
            Data
          </TextInfos>
          <ContainerInfos>
            <ContainerInfoText>
              <GerericInfo>Height: </GerericInfo>
              <GenericLabel>{(pokemon.height)/10} m</GenericLabel>
            </ContainerInfoText>
            <ContainerInfoText>
              <GerericInfo>Weight: </GerericInfo>
              <GenericLabel>{(pokemon.weight)/10} kg</GenericLabel>
            </ContainerInfoText>
          </ContainerInfos>

          <TextInfos
            style={{ color: specie?.color.name}}
          >
            Training
          </TextInfos>
          <ContainerInfos>
              <ContainerInfoText>
                <GerericInfo>Catch Hate: </GerericInfo>
                <GenericLabel>{specie?.capture_rate}</GenericLabel>
              </ContainerInfoText>
              <ContainerInfoText>
                <GerericInfo>Base Happiness: </GerericInfo>
                <GenericLabel>{specie?.base_happiness}</GenericLabel>
              </ContainerInfoText>
          </ContainerInfos>

          <TextInfos
            style={{ color: specie?.color.name}}
          >
            Base Stats
          </TextInfos>
          <ContainerInfos>
            {
              pokemon.stats.map((item) => {
                return <>
                  <ContainerStats>
                    <ContentStatName>
                      <StatName>
                        {
                          item.stat.name === "special-attack" 
                            ? "sp-atk"
                            : item.stat.name === "special-defense"
                              ? "sp-def"
                              : item.stat.name
                        }
                      </StatName>
                    </ContentStatName>
                    <ContentStatBar>
                      <StatBar value={item.base_stat}/>
                    </ContentStatBar>
                    <ContentStatValue>
                      <StatValue>{item.base_stat}</StatValue>
                    </ContentStatValue>
                  </ContainerStats>
                </>
              })
            }
          </ContainerInfos>
        </Content>
      </Container>
    </>
  );
}

export default PokemonDetail;

function defineBackgroundColor(): import("react-native").ColorValue | undefined {
  throw new Error('Function not implemented.');
}
