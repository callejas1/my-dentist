import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Link, IconButton, Menu, MenuItem } from "@material-ui/core";
import { UserContext } from "../context/UserContext";
import logout from "../utils/logout";
import useStyles from "../styles/navbarStyles";
import AccountCircle from '@material-ui/icons/AccountCircle';

const Navbar = () => {
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const linkStyle = { textDecoration: "none" }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href="/profile" style={linkStyle} color="inherit">
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
      <Link onClick={logout} style={linkStyle} color="inherit">
        Logout
      </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit" style={linkStyle}>
              My Dentist
            </Link>
          </Typography>
          {userInfo && userInfo.email ? (
              <IconButton
                edge="end"
                aria-label="current user"
                aria-controls='primary-search-account-menu'
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          ) : (
            <>
            <Button color="inherit">
              <Link href="/register" color="inherit">
                Register
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/login" color="inherit">
                Login
              </Link>
            </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>    
  );
};

export default Navbar;
