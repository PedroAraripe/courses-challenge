import { configureStore } from '@reduxjs/toolkit';
import courses from './courses';
import categories from './categories';

export default configureStore({
  reducer: {
    courses,
    categories,
  },
});