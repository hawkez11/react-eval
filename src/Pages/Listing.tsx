import React, { useState } from 'react';
import DisneyTable from '../Components/Table';
import { useQuery } from 'react-query';
import { GetAllCharacters, TransformCharacters, TransformedCharacters } from '../Api/DisneyApi';
import { AllCharacters } from '../types/disneyApi/AllCharacters';
import FavoritesPopover from '../Components/FavoritesPopover';
import { FavoritesContext } from './FavoritesContext';
import { ImageIndexData } from '../Components/ImageIndex';

const Listing = () => {
	const defaultFavorites: ImageIndexData[] = []
	let [favorites, setFavorites] = useState(defaultFavorites);
	const favoritesContextValue = { favorites, setFavorites };

	const { data, isLoading } = useQuery<AllCharacters, Error, TransformedCharacters>('getAllCharacters', GetAllCharacters, {
		select: TransformCharacters
	});

	if(isLoading) {
		return (
			<label>It's loading....</label>
		);
	}

	return (
		<div style={{margin: 30}}>
			<FavoritesContext.Provider value={favoritesContextValue}>
				<FavoritesPopover />
				<DisneyTable rows={data?.data} />
			</FavoritesContext.Provider>
		</div>
	);
}

export default Listing;