import { ImageIndexData } from '../Components/ImageIndex';
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

const defaultFavorites: ImageIndexData[] = [];

const FavoritesSlice = createSlice({
	name: 'favorites',
	initialState: defaultFavorites,
	reducers: {
		setFavorites(state, action: PayloadAction<ImageIndexData[]>) {
			return action.payload;
		}
	}
});

export const { setFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;

export const FavoritesSelector = createSelector(
	(state: any) => state.favorites,
	(favorites: ImageIndexData[]) => favorites
);