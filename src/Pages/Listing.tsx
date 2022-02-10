import React from 'react';
import DisneyTable from '../Components/Table';
import { useQuery } from 'react-query';
import { GetAllCharacters, TransformCharacters, TransformedCharacters } from '../Api/DisneyApi';
import { AllCharacters } from '../types/disneyApi/AllCharacters';

const Listing = () => {
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
			<DisneyTable rows={data?.data} />
		</div>
	);
}

export default Listing;