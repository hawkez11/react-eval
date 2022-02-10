import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export type ImageIndexData = {
	_id: number,
	name: string,
	imageUrl: string
}

export type ImageListPropType = {
	data: ImageIndexData[]
}

const ImageIndex = ({data}: ImageListPropType) => {

	return (
		<ImageList variant='quilted' cols={6} gap={8} >
			{
				data.map((item) => (
					<ImageListItem key={item._id}>
						<img src={item.imageUrl} alt={item.name}/>
						<ImageListItemBar
							title={item.name}
						/>
					</ImageListItem>
				)
			)}
		</ImageList>
	);
}

export default ImageIndex;