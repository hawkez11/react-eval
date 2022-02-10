import axios, { Axios, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { GridRowModel, GridRowsProp } from '@mui/x-data-grid';

import { AllCharacters } from "../types/disneyApi/AllCharacters";
import SingleCharacter from "../types/disneyApi/SingleCharacter";

export const GetAllCharacters = (): Promise<AllCharacters> => {
	const disneyUrl = 'https://api.disneyapi.dev/characters';

	return axios.get(disneyUrl).then((response) => response.data);
}

export type TransformedCharacters = {
	data: GridRowsProp,
	count: number,
	totalPages: number
}

const listTransform = (list: string[]) => {
	let response = '';
	list.forEach((item) => response = `${response}${item}, `)
	
	return response.slice(0, -2);
}

export const TransformCharacters = (allCharacters: AllCharacters): TransformedCharacters  => {
	let response: TransformedCharacters = {
		data: [],
		count: allCharacters.count,
		totalPages: allCharacters.totalPages
	};

	response.data = allCharacters.data.map((item: SingleCharacter) => {
		let transformed: GridRowModel = {
			id: item._id,
			name: item.name,
			films: listTransform(item.films),
			tvShows: listTransform(item.tvShows),
			videoGames: listTransform(item.videoGames),
			allies: listTransform(item.allies),
			enemies: listTransform(item.enemies),
			imageUrl: item.imageUrl
		} 

		return transformed;
	});

	return response;
}
