import { createSlice } from '@reduxjs/toolkit'

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
        return alert("Ops wrong credentials!");
        
      }

      delete userCredentials.password;
      
      localStorage.setItem('user', JSON.stringify(userCredentials))

      state.user = userCredentials;
    },
    getUserInStorage: (state) => {
      const userCredentials = JSON.parse(localStorage.getItem('user'));
      state.user = userCredentials;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
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