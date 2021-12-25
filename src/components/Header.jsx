/**@jsx jsx */
import React, { useState } from 'react';
import {
  Box,
  Stack,
  InputBase,
  TextField,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack/Stack';
import { jsx, css } from '@emotion/react';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';

import { IconListButton } from './index';

const Header = () => {

  const [menu, setMenu] = useState( false );

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMenu( open );
  }

  return (
    <>
      <Box sx={{padding: "10px"}}>
        <Stack direction="row" spacing={2}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer>
            <List>
              <IconListButton icon={<HomeIcon />} text="ホーム" />
              <IconListButton icon={<StarIcon />} text="お気に入り"/>

            </List>
          </SwipeableDrawer>
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            placeholder="URLまたはIDで検索…"
            sx={{ width: "60ch" }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Header;
