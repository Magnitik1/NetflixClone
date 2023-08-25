import {configureStore} from '@reduxjs/toolkit';
import userReduser from './slices/usersSlice'
export const store = configureStore({
    reducer:{
        user: userReduser,
    }
});