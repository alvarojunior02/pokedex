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
  TextLoadMore
} from './styles';

type PokemonsType = {
  name: string,
  url: string,
}

const Pokemons = ({navigation}: any) => {
  const [pokemons, setPokemons] = useState<PokemonsType[]>();
  const [next, setNext] = useState("");
  const [cont, setCont] = useState(1);

  const getPokemons = async () => {
    await api.get("/pokemon")
      .then(response => {
        setPokemons(response.data.results);
        setNext(`/pokemon?offset=${20*cont}&limit=20`);
        setCont(cont + 1);
      })
  }

  const loadMorePokemons = async () => {
    await api.get(next)
      .then(response => {
        setPokemons(pokemons?.concat(response.data.results));
        setNext(`/pokemon?offset=${20*cont}&limit=20`);
        setCont(cont + 1);
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
              <ButtonLoadMore
                onPress={() => {
                  loadMorePokemons();
                }}
              >
                <TextLoadMore>Load More</TextLoadMore>
              </ButtonLoadMore>
            </ContainerCards>
        }
      </Container>
    </>
  );
}

export default Pokemons;
