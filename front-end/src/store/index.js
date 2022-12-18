import { configureStore } from '@reduxjs/toolkit';
import scriptsContentReduce from './scriptsContent';

export default configureStore({
  reducer: {
    scriptsContent : scriptsContentReduce,
  },
});