import React from 'react';
import { Box, Stack, IconButton, Button } from '@mui/material';

const ListChannels = (props) => {

  if (props.value !== null) {
    return (
      <Box>
        <Stack>
          
        </Stack>
      </Box>
    )
  } else {
    return (
      <Box>
        <p>登録しているチャンネルがありません。</p>
      </Box>
    )
  }
}

export default ListChannels;