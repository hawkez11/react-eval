import { GridRowsProp } from "@mui/x-data-grid";
import { ImageIndexData } from "../Components/ImageIndex";
import { AllCharacters } from "../types/disneyApi/AllCharacters";

export const imageData: ImageIndexData[] = [ 
	{
		_id: 0,
		name: "Abigail the Cow",
		  imageUrl: "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg"
	},
	{
		_id: 1,
		name: "Abu",
		  imageUrl: "https://static.wikia.nocookie.net/disney/images/3/3f/Profile_-_Abu.png"
	},
	{
		_id: 2,
		name: "Professor Acari",
		  imageUrl: "https://static.wikia.nocookie.net/disney/images/5/5d/Professor_Acari.jpg"
	},
	{
		_id: 3,
		name: "Candace Adams",
		  imageUrl: "https://static.wikia.nocookie.net/disney/images/8/8b/Enemy_of_the_State_promo_3.jpg"
	},
	{
		_id: 4,
		name: "Adora",
		  imageUrl: "https://static.wikia.nocookie.net/disney/images/6/6b/Profile-Adora.PNG"
	},
	{
		_id: 5,
		name: "Agent E",
		imageUrl: "https://static.wikia.nocookie.net/disney/images/d/d4/Agent_E_salutes_Perry.jpg"
	},
	{
		_id: 6,
		name: "Aggro",
		imageUrl: "https://static.wikia.nocookie.net/disney/images/9/9c/Aggro.png"
	}
];

export const dataGridData: GridRowsProp = [
	{
		"films": "",
		"tvShows": "Lab Rats",
		"videoGames": "",
		"allies": "",
		"enemies": "",
		"id": 133,
		"name": "Agent Gordon",
		"imageUrl": "https://static.wikia.nocookie.net/disney/images/5/51/Screenshot_2016-09-12_at_8.13.42_PM.png"
	  },
	  {
		"films": "",
		"tvShows": "The Replacements",
		"videoGames": [],
		"allies": [],
		"enemies": [],
		"id": 134,
		"name": "Agent K",
		"imageUrl": "https://static.wikia.nocookie.net/disney/images/8/88/The-replacements-kath-soucie-0.jpg"
	  },
	  {
		"films": "",
		"shortFilms": "",
		"tvShows": "Quack Pack",
		"videoGames": "",
		"allies": "",
		"enemies": "",
		"id": 135,
		"name": "Agent X",
		"imageUrl": "https://static.wikia.nocookie.net/disney/images/e/ef/Agent_X.png"
	  },
	  {
		"films": "Bolt (film)",
		"tvShows": "",
		"videoGames": "",
		"allies": "",
		"enemies": "",
		"id": 136,
		"name": "Agent",
		"imageUrl": "https://static.wikia.nocookie.net/disney/images/b/b2/Agent-%28Bolt%29.jpg"
	  },
]