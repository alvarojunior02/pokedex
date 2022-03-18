import React, { useEffect, useState } from 'react';
import CardPokemon from '../../components/CardPokemon';
import api from '../../services/api';

import {
  Container
} from './styles';

type PokemonsType = {
  name: string,
  url: string,
}

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonsType[]>();

  const getPokemons = () => {
    api.get("/pokemon")
      .then(response => {
        setPokemons(response.data.results);
      })
  }

  useEffect(() => {
    getPokemons();
  }, []);


  return (
    <>
      <Container>
        {
          pokemons?.map((pokemon) => {
            return (
              <CardPokemon key={pokemon.name} url={pokemon.url} />
            );
          })
        }
      </Container>
    </>
  );
}

export default Pokemons;
