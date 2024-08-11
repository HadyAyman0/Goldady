import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { Usercontext } from '../../Context/User.context';
import img1 from '../../assets/Goldady-logo.png'
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { logout, token } = React.useContext(Usercontext)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none", mb: "70px", top: "0px", left: "0px" }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "transparent" }} disableGutters>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={img1} className='w-[30px] h-[30px] object-cover mr-1' alt="Logo" />
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
                  className={({ isActive }) => {
                    return `flex items-center lg:hover:before:w-full before:transition-[width] before:duration-300 before:h-0  lg:hover:before:h-[0.9px] before:absolute before:bg-green-500 before:bottom-[-2px] before:left-0  relative before:w-0 hover:text-green-500 transition-colors ${isActive ? `font-extrabold text-green-500 before:w-full ` : ""} `
                  }}
                  to="/auth/register"
                >
                  Registrition
                </NavLink>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) => {
                    return `flex items-center lg:hover:before:w-full before:transition-[width] before:duration-300 before:h-0  lg:hover:before:h-[0.9px] before:absolute before:bg-green-500 before:bottom-[-2px] before:left-0  relative before:w-0 hover:text-green-500 transition-colors ${isActive ? `font-extrabold text-green-500 before:w-full ` : ""} `
                }}
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
                    className={({ isActive }) => {
                      return `flex items-center lg:hover:before:w-full before:transition-[width] before:duration-300 before:h-0  lg:hover:before:h-[0.9px] before:absolute before:bg-green-500 before:bottom-[-2px] before:left-0  relative before:w-0 hover:text-green-500 transition-colors ${isActive ? `font-extrabold text-green-500 before:w-full ` : ""} `
                  }}
                  >
                    Registrition
                  </NavLink>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) => {
                      return `flex items-center lg:hover:before:w-full before:transition-[width] before:duration-300 before:h-0  lg:hover:before:h-[0.9px] before:absolute before:bg-green-500 before:bottom-[-2px] before:left-0  relative before:w-0 hover:text-green-500 transition-colors ${isActive ? `font-extrabold text-green-500 before:w-full ` : ""} `
                  }}
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
