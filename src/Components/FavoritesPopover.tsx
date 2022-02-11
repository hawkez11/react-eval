import React from 'react';
import { Button, Popover } from '@mui/material';
import ImageIndex from './ImageIndex';
import { FavoritesSelector } from '../Pages/FavoritesSlice';
import { useSelector } from 'react-redux';

const FavoritesPopover = () => {
	const favorites = useSelector(FavoritesSelector);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<Button variant="contained" onClick={handleClick}>
				{`Favorites (${favorites.length})`}
			</Button>
			<Popover
				id='FavoritesPopover'
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				{ <ImageIndex data={favorites}/> }
			</Popover>
		</>
	);
};

export default FavoritesPopover;