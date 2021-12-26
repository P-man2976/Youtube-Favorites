/**@jsxRuntime classic */
/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import * as localforage from 'localforage';
import { Box, Stack, IconButton, Button } from '@mui/material';
import { jsx, css } from '@emotion/react';
import { ListChannels } from './index';

const AppHomeCss = css `

  padding: 10px;
  font-family: sans-serif;
`

const AppHome = () => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    localforage.getItem('favorites').then((value) => {
      if (value !== null) {
        setFavorites(value);
      } else {
        return;
      }
    });
  }, []);

  return (
    <Box css={AppHomeCss}>
      <Stack>
        <Box>
          <h2>お気に入りチャンネル</h2>
          <ListChannels value={favorites} />
        </Box>
      </Stack>
    </Box>
  );
};

export default AppHome;
