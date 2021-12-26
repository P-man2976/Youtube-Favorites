import React, { useEffect, useState } from 'react';
import * as localforage from 'localforage';
import { Box, Stack, IconButton, Button } from '@mui/material';
import { ListChannels } from './index';

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
    <Box>
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
