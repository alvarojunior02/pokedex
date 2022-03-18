import api from "../../services/api";

export const getPokemons = (callback = () => {}) => async () => {
  try {
      api.get("/pokemons")
      .then(response => {
          console.log(response.data);
          /*dispatch({
              type: 'GET_POKEMONS',
              payload: response.data.data.results,
          });*/
          // callback();
      })
      .catch(error => console.log(error));
  } catch (err) {
      console.log(err);
  }
};