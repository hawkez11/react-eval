import React from 'react';
import DisneyTable from '../Components/Table';
import FavoritesPopover from '../Components/FavoritesPopover';
import { useGetAllCharactersQuery } from '../Api/DisneyApi';

const Listing = () => {
	const { data, isLoading } = useGetAllCharactersQuery(null);

	if(isLoading) {
		return (
			<label>It's loading....</label>
		);
	}

	return (
		<div style={{margin: 30}}>
			<FavoritesPopover />
			<DisneyTable rows={data?.data} />
		</div>
	);
}

export default Listing;