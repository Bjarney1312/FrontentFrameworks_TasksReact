import { configureStore } from '@reduxjs/toolkit';
import lanesReducer from './features/lanesSlice';
import tasksReducer from './features/tasksSlice';

export default configureStore({
    reducer:{
        lanes: lanesReducer,
        tasks: tasksReducer,
    },
})