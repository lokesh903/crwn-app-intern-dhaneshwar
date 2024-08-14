import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import { useThemeContext } from '../../context/theme/ThemeContextProvider';
import { Link } from 'react-router-dom';
import { GoogleAuthButton, SignInAuthForm, SignUpAuthForm } from '.';

function ColorSchemeToggle(props: IconButtonProps) {
	const [mounted, setMounted] = React.useState(false);
	const { onClick, ...other } = props;
	const { mode } = useThemeContext();
	const { setMode } = useColorScheme();
	React.useEffect(() => setMounted(true), []);
	React.useEffect(() => {
		if (mode === 'light' || mode === 'dark') {
			setMode(mode);
		}
	}, [mode, setMode]);
	return (
		<IconButton
			aria-label="toggle light/dark mode"
			size="sm"
			sx={{ display: 'none' }}
			variant="outlined"
			disabled={!mounted}
			onClick={event => {
				setMode(mode === 'light' ? 'dark' : 'light');
				onClick?.(event);
				console.log(event);
			}}
			{...other}
		>
			{mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
		</IconButton>
	);
}

export default function JoySignInSideTemplate() {
	const [formChange, setFormChange] = React.useState(true);
	// const theme = useThemeContext();
	const handleFormChange = () => {
		setFormChange(prev => !prev);
	};
	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<CssBaseline />
			<GlobalStyles
				styles={{
					':root': {
						'--Form-maxWidth': '800px',
						'--Transition-duration': '0.4s',
					},
				}}
			/>
			<Box
				sx={theme => ({
					width: { xs: '100%', md: '50vw' },
					transition: 'width var(--Transition-duration)',
					transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
					position: 'relative',
					zIndex: 1,
					display: 'flex',
					justifyContent: 'flex-end',
					backdropFilter: 'blur(12px)',
					backgroundColor: 'rgba(255 255 255 / 0.2)',
					[theme.getColorSchemeSelector('dark')]: {
						backgroundColor: 'rgba(19 19 24 / 0.4)',
					},
				})}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						minHeight: '100dvh',
						width: '100%',
						px: 2,
					}}
				>
					<Box
						component="header"
						sx={{
							py: 3,
							mt: 5,
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						{/* <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
								<IconButton variant="soft" color="primary" size="sm">
									<BadgeRoundedIcon />
								</IconButton>
								<Typography level="title-lg">Company logo</Typography>
							</Box> */}
						<ColorSchemeToggle />
					</Box>
					<Box
						component="main"
						sx={{
							my: 'auto',
							py: 2,
							pb: 5,
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							width: 400,
							maxWidth: '100%',
							mx: 'auto',
							borderRadius: 'sm',
							'& form': {
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
							},
							[`& .MuiFormLabel-asterisk`]: {
								visibility: 'hidden',
							},
						}}
					>
						<Stack gap={4} sx={{ mb: 2 }}>
							<Stack gap={1}>
								<Typography component="h1" level="h3">
									{formChange ? 'Sign In' : 'Sign Up'}
								</Typography>
								<Typography level="body-sm">
									{formChange ? 'New to company? ' : `Don't have an Account ?`}{' '}
									&nbsp;
									<Link
										to={`#${formChange ? 'sign-in' : 'sign-up'}`}
										onClick={handleFormChange}
									>
										{formChange ? 'Sign up!' : 'Sign in!'}
									</Link>
									{/* <Link href="#replace-with-a-link" level="title-sm">
										Sign up!
									</Link> */}
								</Typography>
							</Stack>
							{formChange ? <GoogleAuthButton /> : null}
						</Stack>
						{formChange ? (
							<Divider
								sx={theme => ({
									[theme.getColorSchemeSelector('light')]: {
										color: { xs: '#FFF', md: 'text.tertiary' },
									},
								})}
							>
								or
							</Divider>
						) : null}

						<Stack gap={4} sx={{ mt: 2 }}>
							{formChange ? <SignInAuthForm /> : <SignUpAuthForm />}
						</Stack>
					</Box>
					<Box component="footer" sx={{ py: 3 }}>
						<Typography level="body-xs" textAlign="center">
							© Trendz {new Date().getFullYear()}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={theme => ({
					height: '100%',
					position: 'fixed',
					right: 0,
					top: 0,
					bottom: 0,
					left: { xs: 0, md: '50vw' },
					transition:
						'background-image var(--Transition-duration), left var(--Transition-duration) !important',
					transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
					backgroundColor: 'background.level1',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundImage:
						'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
					[theme.getColorSchemeSelector('dark')]: {
						backgroundImage:
							'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
					},
				})}
			/>
		</CssVarsProvider>
	);
}
