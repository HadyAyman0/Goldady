import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import { Usercontext } from '../../Context/User.context';
import { AddBox } from '@mui/icons-material';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { logout, token } = React.useContext(Usercontext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none", mb: "70px", top: "0px", left: "0px" }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "transparent" }} disableGutters>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="https://cdn.goldady.com/images/front-end/1708167878.png" className='w-[30px] h-[30px] object-cover mr-1' alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                m: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                display: { xs: 'none', md: 'block' }
              }}
            >
              FRONTEND-TASK
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', gap: "15px" }, }}>
            {token ?

              <NavLink >
                <i onClick={logout} className="fa-solid fa-right-from-bracket"></i>
              </NavLink>
              : <div className='flex gap-3'>
                <NavLink
                  to="/auth/register"
                >
                  Registrition
                </NavLink>
                <NavLink
                  to="/auth/login"
                >
                  Login
                </NavLink>
              </div>}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {token ?
                <NavLink  >
                  <i onClick={logout} className=" p-3 fa-solid fa-right-from-bracket"></i>
                </NavLink>
                : <div className='flex flex-col p-2 gap-3'>
                  <NavLink
                    to="/auth/register"
                  >
                    Registrition
                  </NavLink>
                  <NavLink
                    to="/auth/login"
                  >
                    Login
                  </NavLink>
                </div>}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
