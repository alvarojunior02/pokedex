import React, { useEffect, useState } from 'react';
import CardPokemon from '../../components/CardPokemon';
import api from '../../services/api';

import iconArrow from '../../assets/icons/arrow.png';

import {
  Container,
  BackButton,
  BackIcon,
  Title,
  ContainerCards,
  Loader,
  ButtonLoadMore,
  TextLoadMore,
  ContainerButtons
} from './styles';

type PokemonsType = {
  name: string,
  url: string,
}

const Pokemons = ({navigation}: any) => {
  const [pokemons, setPokemons] = useState<PokemonsType[]>();
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [cont, setCont] = useState(1);

  const getPokemons = async () => {
    await api.get("/pokemon")
      .then(response => {
        setPokemons(response.data.results);
        setNext(`/pokemon?offset=${20*cont}&limit=20`);
        if(cont > 1) {
          setPrev(`/pokemon?offset=${20*(cont-2)}&limit=20`);
        }
      })
  }

  const nextPokemons = async () => {
    await api.get(next)
      .then(response => {
        setPokemons(response.data.results);
        setPrev(`/pokemon?offset=${20*(cont-1)}&limit=20`);
        setNext(`/pokemon?offset=${20*cont}&limit=20`);
        setCont(cont + 1);
      })
  }

  const prevPokemons = async () => {
    await api.get(prev)
      .then(response => {
        setPokemons(response.data.results);
        setPrev(`/pokemon?offset=${20*(cont-4)}&limit=20`);
        setNext(`/pokemon?offset=${20*(cont-2)}&limit=20`);
        setCont(cont - 1);
      })
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Container>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon source={iconArrow}/>
        </BackButton>
        <Title>Pokemons</Title>
        {
          !pokemons 
            ?
              <Loader size={"large"} color={"black"}/>
            : 
            <ContainerCards
              contentContainerStyle={{ 
                flexWrap: "wrap", 
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              {
                pokemons?.map((pokemon) => {
                  return (
                    <CardPokemon 
                      key={pokemon.name} 
                      url={pokemon.url} 
                      navigation={navigation}
                    />
                  );
                })
              }
            </ContainerCards>
        }
        <ContainerButtons>
          <ButtonLoadMore
            onPress={() => {
              prevPokemons();
            }}
            disabled={cont === 1 ? true : false || pokemons?.length === 0 ? true : false}
          >
            <TextLoadMore>{"<<<"}</TextLoadMore>
          </ButtonLoadMore>
          <ButtonLoadMore
            onPress={() => {
              nextPokemons();
            }}
            disabled={pokemons?.length === 0 ? true : false}
          >
            <TextLoadMore>{">>>"}</TextLoadMore>
          </ButtonLoadMore>
        </ContainerButtons>
      </Container>
    </>
  );
}

export default Pokemons;
