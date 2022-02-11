import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { DisneyApi } from './Api/DisneyApi';
import FavoritesReducers from './Pages/FavoritesSlice';

export const store = configureStore({
	reducer: {
		[DisneyApi.reducerPath]: DisneyApi.reducer,
		favorites: FavoritesReducers
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(DisneyApi.middleware)
});

setupListeners(store.dispatch);
