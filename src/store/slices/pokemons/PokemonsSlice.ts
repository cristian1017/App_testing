import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IGetPokemons, IPokemons } from "../../../models/pokemons";
import { getAllPokemons } from "../../../services/pokemons/pokemons";
import { RootState } from "../../store";

export const getPokemons = createAsyncThunk(
  //action type string
  "pokemon/getPokemons",
  // callback function
  async (_, thunkAPI) => {
    try {
      const data = (await getAllPokemons()) as IGetPokemons[];
      return { data };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState: IPokemons = {
  pokemons: [],
  pokemonDetails: {},
  isLoading: false,
  isPopup: false
};

export const PokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonDetails: (state: IPokemons, action: PayloadAction<object>) => {
      state.pokemonDetails = action.payload;
    },
    setIsLoading: (state: IPokemons, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsPopup: (state: IPokemons, action: PayloadAction<boolean>) => {
      state.isPopup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
        state.pokemons = payload.data;
        state.isLoading = false;
      }),
      builder.addCase(getPokemons.rejected, (state) => {
        state.isLoading = false;
        console.log("hola");
      });
  },
});

export const { setIsLoading, setIsPopup, setPokemonDetails } = PokemonsSlice.actions;

export const pokemons = (state: RootState) => state.pokemon.pokemons;
export const pokemonDetails = (state: RootState) => state.pokemon.pokemonDetails;
export const isPopup = (state: RootState) => state.pokemon.isPopup;

