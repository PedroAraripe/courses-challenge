import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { toastConfig } from '../common/configs';
import { courses, getCoursesHelper } from './courses';

const storeUserData = (stateValue) => {
    localStorage.setItem('user', JSON.stringify(stateValue));
  // delete state.value.user.password;
};
const retrieveUserData = () => {
    const userInStorage = localStorage.getItem('user');

    return userInStorage ? JSON.parse(userInStorage) : null;
  // delete state.value.user.password;
}

export const users = [
  {
    login: "admin",
    role: "admin",
    courses: []
  },
  {
    login: "aluno",
    role: "user",
    courses: []
  },
].map((student, index) => {
  student.id = index + 1;
  student.password = 123;

  return student;
});

export const userSlice = createSlice({
  name: 'categories',
  initialState: {
    value: {
      user: null,
      coursesIds: [
        1,3,4
      ],
      courses: [],
      course: {},
    }
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

      state.value.user = userCredentials;
      storeUserData(state.value);

      toast.success(`Seja bem vindo novamente ${userCredentials.login}! 😀`, toastConfig);
    },
    getUserInStorage: (state) => {
      const userCredentials = retrieveUserData();

      if(userCredentials) {
        state.value = userCredentials;
      }

    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.value.user = null;

      toast.success('Deslogado com sucesso', toastConfig);
    },
    buyCourse: (state, action) => {
      const { courseId } = action.payload;

      state.value.coursesIds.push(courseId);
    },
    getUserCourses: (state, action) => {
      state.value.courses = getCoursesHelper({
        payload: {
          ...action.payload,
          isUserCourses: true,
          coursesParams: state.value.coursesIds
        },
        
      });
      // storeUserData(state.value);
    },
    getUserCourse: (state, action) => {
      const { id } = action?.payload;

      state.value.course = state.value.courses?.items?.find(course => course.id == id);
      // storeUserData(state.value);
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  validateUser,
  getUserInStorage,
  logout,
  buyCourse,
  getUserCourses,
  getUserCourse,
} = userSlice.actions

export default userSlice.reducer