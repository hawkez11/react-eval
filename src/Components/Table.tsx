import React, { useContext } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { ImageIndexData } from './ImageIndex';
import { FavoritesContext } from '../Pages/FavoritesContext';

export type DisneyTableProps = {
	rows: GridRowsProp | undefined
};

const DisneyTable = (props: DisneyTableProps) => {
	
	let { favorites, setFavorites } = useContext(FavoritesContext);

	const GetDataGrid = ({rows}: DisneyTableProps) => {
		const pageSize = 50;
		const columns: GridColDef[] = [
			{ 
				field: 'imageUrl', 
				headerName: 'Image',
				renderCell: (params) => <img src={params.value} alt='meh'/>,
				width: 300
			},
			{ field: 'name', headerName: 'Name', width: 200	},
			{ field: 'films', headerName: 'Films', width: 200	},
			{ field: 'tvShows', headerName: 'TV Shows', width: 200	},
			{ field: 'videoGames', headerName: 'Video Games', width: 200 },
			{ field: 'allies', headerName: 'Allies', width: 200	},
			{ field: 'enemies', headerName: 'Enemies', width: 200 },
		];
	
		if(rows !== undefined) {
			
			return (
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={pageSize}
					rowHeight={300}
					checkboxSelection
					selectionModel={favorites.map((item) => item._id)}
					onSelectionModelChange={(newSelectionModel) => {
						const selectedIDs = new Set(newSelectionModel);
						const selectedRowData = rows.filter((row) =>
							selectedIDs.has(row.id)
  						);
						const favorites = selectedRowData.map((item) => {
							const response: ImageIndexData = {
								_id: item["id"],
								imageUrl: item["imageUrl"],
								name: item["name"]
							}
							return response;
						});
						setFavorites(favorites);
					}}
				/>
			)
		}
	
		return;
	}

	return (
		<div style={{ height: 1000, width: '100%' }}>
			{GetDataGrid(props)}
		</div>
	);
};

export default DisneyTable;