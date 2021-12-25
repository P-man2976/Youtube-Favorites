/**@jsx jsx */
import React from 'react';
import {
  Box,
  Stack,
  InputBase,
  TextField,
  IconButton,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack/Stack';
import { jsx, css } from '@emotion/react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
