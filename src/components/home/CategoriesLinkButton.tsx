import React from 'react';
import { Link } from 'react-router-dom';
import {
	ImageButton,
	ImageSrc,
	ImageBackdrop,
	ImageMarked,
	Image,
} from './category.link.style';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface CategoryValues {
	id: number;
	title: string;
	imageUrl: string;
	route: string;
}
interface CategoriesLinkBtnProps {
	category: CategoryValues;
}

const CategoriesLinkButton: React.FC<CategoriesLinkBtnProps> = ({
	category,
}) => {
	return (
		<Grid item={true} xs={12} sm={6} md={4}>
			<ImageButton
				focusRipple
				style={{
					width: '100%',
					height: '28vh',
				}}
			>
				<ImageSrc style={{ backgroundImage: `url(${category?.imageUrl})` }} />
				<ImageBackdrop className="MuiImageBackdrop-root" />
				<Image>
					<Link to={`/${category?.route}`}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							sx={{
								position: 'relative',
								p: 4,
								pt: 2,
								fontWeight: 900,
								pb: theme => `calc(${theme.spacing(1)} + 6px)`,
								// bgcolor: 'red',
							}}
						>
							{category?.title.toUpperCase()}
							<ImageMarked className="MuiImageMarked-root" />
						</Typography>
					</Link>
				</Image>
			</ImageButton>
		</Grid>
	);
};

export default CategoriesLinkButton;
