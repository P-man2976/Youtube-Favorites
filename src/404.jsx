import React from 'react';
import { Box, Stack, IconButton, Button } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import { Header } from './components/index';

const notFoundmd = `

# 404

お探しのページは見つかりませんでした。移動もしくは削除された可能性があります。
`;

const Notfound = () => {
  return (
    <>
      <Header />
      <Stack>
        <ReactMarkdown className="markdown">
          {notFoundmd}
        </ReactMarkdown>
        <Button variant="outlined" component={RouterLink} to="/">
          ホームに戻る
        </Button>
      </Stack>
    </>
  );
};

export default Notfound;
