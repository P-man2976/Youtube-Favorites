import React from 'react'
import {
  Box,
  Stack,
  IconButton,
  Button
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Header } from './components/index';

const notFoundmd = `

# 404

お探しのページは見つかりませんでした。移動もしくは削除された可能性があります。
`

const Notfound = () => {
  return (
    <>
      <Header />
      <Box>
        <ReactMarkdown className="markdown">
          {notFoundmd}
        </ReactMarkdown>
      </Box>
    </>
  )
}

export default Notfound;