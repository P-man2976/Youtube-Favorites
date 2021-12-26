import React, { useEffect } from 'react';
import * as localforage from 'localforage';
import { Box, Stack, IconButton, Button } from '@mui/material';



const Apphome = () => {

  useEffect(() => {

    localforage.getItem('favorites').then( value => {

      if (value !== null) {
        
      }
    })
  },[])

  return (

    <Box>
      <Stack>
        <h2>お気に入りチャンネル</h2>
      </Stack>
    </Box>
  )
}