import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

interface IProps {
  url: string;
}

type Pokemon = {
  id: number,
  name: string,
  sprites: {
    front_default: string
  }
}

import {
  Container,
  TextID,
  Image,
  TextName,
} from './styles';

const CardPokemon = ({url}: IProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = () => {
    axios.get(url)
      .then(response => {
        setPokemon(response.data);
      })
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Container>
        <TextID>#{pokemon?.id}</TextID>
        <Image source={{ uri: pokemon?.sprites.front_default }}/>
        <TextName>{pokemon?.name}</TextName>
      </Container>
    </>
  );
}

export default CardPokemon;