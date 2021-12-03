import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography
} from "@mui/material";
import Image from "next/image";
import Logo from "../public/logo.png";
import React from "react";
import {useRouter} from "next/router";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['random'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
	const router = useRouter();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event: any ) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: any ) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (e: {}) => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<AppBar position="static" elevation={1}>
			<Container fixed>
			<Toolbar>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
				>
					<Image src={Logo} alt={"Jebzpapy"} width={150} height={50} onClick={() => router.push("/")}/>
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={(e) => handleOpenNavMenu(e)}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={(e) => handleCloseNavMenu(e)}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
					>
						{pages.map((page) => (
							<MenuItem key={page} onClick={(e) => handleCloseNavMenu(e)}>
								<Typography textAlign="center" onClick={() => router.push(`/${page}`)}>
									{page}
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
				>
					Jebzpapy
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{pages.map((page) => (
						<Button
							key={page}
							onClick={() => router.push(`/${page}`)}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							{page}
						</Button>
					))}
				</Box>

				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={(e) => handleOpenUserMenu(e)} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navbar;