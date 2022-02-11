import React from 'react';
import { ImageIndexData } from '../Components/ImageIndex';

interface FavoritesContextValueType {
	favorites: ImageIndexData[],
	setFavorites: React.Dispatch<React.SetStateAction<ImageIndexData[]>>
};

const defaultFavorites: FavoritesContextValueType = {
	favorites: [],
	setFavorites: () => []
};

export const FavoritesContext = React.createContext<FavoritesContextValueType>(defaultFavorites);