import React from 'react';
import { Link } from 'react-router-dom';
import SubHeading from '../../headings/SubHeading';
const Logo: React.FC = () => {
	return (
		<>
			<Link to="/">
				{/* <Logo /> */}
				<div className="flex items-center justify-center">
					<img src="/shop.png" height={40} width={40} alt="" />
					<SubHeading
						sx={{
							pt: { xs: 2, sm: 4, md: 1 },
							pb: { xs: 2, sm: 4, md: 1 },
							fontSize: { xs: 15, sm: 12, md: 22 },
						}}
					>
						Trendz
					</SubHeading>
				</div>
			</Link>
		</>
	);
};

export default Logo;
