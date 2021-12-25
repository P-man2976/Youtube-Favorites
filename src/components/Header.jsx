/**@jsxRuntime classic */
/**@jsx jsx */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Stack,
  InputBase,
  TextField,
  IconButton,
  SwipeableDrawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import { jsx, css } from '@emotion/react';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';

import { IconListButton } from './index';
import Switch from '@mui/material/Switch/Switch';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMenu(open);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={menu}
          onOpen={toggleDrawer(true)}
          onClose={toggleDrawer(false)}
        >
          <Box sx={{ width: '250px' }}>
            <List subheader={<ListSubheader>YouTube Favorites</ListSubheader>}>
              <IconListButton icon={<HomeIcon />} text="ホーム" component={RouterLink} to="/home" />
              <IconListButton icon={<StarIcon />} text="お気に入り" component={RouterLink} to="/favorites" />
              <IconListButton icon={<SettingsIcon />} text="設定" component={RouterLink} to="/settings" />
            </List>
          </Box>
        </SwipeableDrawer>
        <TextField
          hiddenLabel
          variant="filled"
          size="small"
          placeholder="URLまたはIDで検索…"
          sx={{ width: '60ch' }}
        />
      </Box>
    </>
  );
};

export default Header;
