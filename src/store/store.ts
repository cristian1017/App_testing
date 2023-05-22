import { configureStore } from '@reduxjs/toolkit'
import { LoginSlice } from './slices/login/LoginSlice'
import { PokemonsSlice } from './slices/pokemons/PokemonsSlice'
// import { leadSlice } from '../features/orders/LeadSlice'
// import { opsSlice } from '../features/orders/OpsSlice'

export const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
    pokemon: PokemonsSlice.reducer,
    // ops: opsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch