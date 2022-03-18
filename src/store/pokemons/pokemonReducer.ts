const INITIAL_STATE = {
  pokemons: [],
};

type actionType = {
  payload: [],
  type: string,
}
  
const pokemonReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
  
export default pokemonReducer;