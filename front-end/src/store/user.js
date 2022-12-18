import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { toastConfig } from '../common/configs';

export const users = [
  {
    login: "admin",
  },
  {
    login: "aluno",
  },
].map((student, index) => {
  student.id = index + 1;
  student.password = 123;

  return student;
});

export const userSlice = createSlice({
  name: 'categories',
  initialState: {
    user: null,
  },
  reducers: {
    validateUser: (state, action) => {
      const {login, password} = action.payload;

      const userCredentials = users.find(user => {
        return user.login == login && user.password == password;

      })

      if(!userCredentials) {
        return toast.error('Usuário ou senha incorretos', toastConfig);
      }

      delete userCredentials.password;
      
      localStorage.setItem('user', JSON.stringify(userCredentials))
      state.user = userCredentials;

      toast.success(`Seja bem vindo novamente ${userCredentials.login}! 😀`, toastConfig);
    },
    getUserInStorage: (state) => {
      const userCredentials = JSON.parse(localStorage.getItem('user'));
      state.user = userCredentials;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;

      toast.success('Deslogado com sucesso', toastConfig);
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  validateUser,
  getUserInStorage,
  logout,
} = userSlice.actions

export default userSlice.reducer