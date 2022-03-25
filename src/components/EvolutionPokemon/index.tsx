import React, { useEffect, useState } from 'react';
import types from '../../config/typesOfPokemons';
import api from '../../services/api';

import {
  Container, PokemonImage
} from './styles';

type PokemonType = {
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

interface IProps {
  pokemonName: string,
}

const EvolutionPokemon = ({pokemonName}: IProps) => {
  const [pokemon, setPokemon] = useState<PokemonType>();

  const getPokemonByName = async () => {
    await api.get(`/pokemon/${pokemonName}`)
      .then(response => {
        setPokemon(response.data);
      })
  }

  const defineBackgroundColor = (type?: string) => { 
    let color = "white";

    types.map(item => {
      pokemon?.types.map(poke => {
        if(item.type === poke.type.name) {
          color = item.color;
        }
      })
    })

    return color;
  }

  useEffect(() => {
    getPokemonByName();
  }, []);

  return (
    <>
      <Container
        style={{ backgroundColor: defineBackgroundColor() }}
      >
        <PokemonImage 
          source={
            { 
              uri: 
                pokemon?.sprites.other["official-artwork"].front_default || 
                pokemon?.sprites.front_default 
            }
          }
        />
      </Container>
    </>
  );
}

export default EvolutionPokemon;