import { configureStore } from '@reduxjs/toolkit';
import courses from './courses';
import categories from './categories';
import user from './user';

export default configureStore({
  reducer: {
    courses,
    categories,
    user
  },
});