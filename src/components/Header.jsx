/**@jsx jsx */
import React, { useState } from 'react';
import {
  Box,
  Stack,
  InputBase,
  TextField,
  IconButton,
  SwipeableDrawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack/Stack';
import { jsx, css } from '@emotion/react';

const Header = () => {
  

  return (
    <>
      <Box sx={{padding: "10px"}}>
        <Stack direction="row" spacing={2}>
          <IconButton>
            <MenuIcon />
          </IconButton>
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
