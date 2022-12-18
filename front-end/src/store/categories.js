import { createSlice } from '@reduxjs/toolkit'

export const categories = [
  {
    name: 'Direito',
  },
  {
    name: 'Perícia',
  },
  {
    name: 'Judicial',
  },
  {
    name: 'Desenvolvimento',
  },
  {
    name: 'Pessoal',
  },
  {
    name: 'Gestão de Pessoas',
  },
  {
    name: 'Cálculos',
  },
].map((categorie, index) => {
  categorie.id = index + 1;

  return categorie;
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: [],
  },
  reducers: {
    getCategories: (state) => {
      state.value = categories;
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  getCategories
} = categoriesSlice.actions

export default categoriesSlice.reducer