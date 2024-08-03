import { Box, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLinks: React.FC = () => {
	return (
		<>
			<Container
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
                    gap:1
				}}
			>
				{' '}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						bgcolor: 'background.default',
						color: 'text.primary',
						borderColor: 'text.primary',
						border: '1px solid',
						borderRadius: 25,
						px: 2,
						py: 1,
						width: 'fit-content',
						position: 'relative',
					}}
				>
					<Link to="/auth">Sign In</Link>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						bgcolor: 'background.default',
						color: 'text.primary',
						borderColor: 'text.primary',
						border: '1px solid',
						borderRadius: 25,
						px: 2,
						py: 1,
						width: 'fit-content',
						position: 'relative',
					}}
				>
					<Link to="/shop">Shop</Link>
				</Box>
			</Container>
		</>
	);
};

export default NavBarLinks;
