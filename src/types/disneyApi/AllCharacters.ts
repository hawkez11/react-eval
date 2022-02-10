import SingleCharacter from "./SingleCharacter"

export type AllCharacters = {
	data: SingleCharacter[],
	count: number,
	previousPage: string,
	nextPage: string,
	totalPages: number
};