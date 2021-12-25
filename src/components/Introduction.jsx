/**@jsx jsx */
import React from 'react';
import { Box } from '@mui/material';

import React from 'react';
import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { jsx, css } from '@emotion/react';

const introduction = `

# YouTube Favorites

YouTube Favoritesとは、YouTubeのお気に入りチャンネルの配信予定・アーカイブをチェックできるサービスです。

`

const introductionCss = css `
  background-color: #f9f9f9;
  max-width: 100vw;
  min-height: 100vh;
  padding: 10px;
  font-family: sans-serif;
`
const markdownCss = css `
  font-family: sans-serif;
`

const Introduction = () => {
  return (
    <>
      <Box css={introductionCss}>
        <ReactMarkdown children={introduction} css={markdownCss} />
      </Box>
    </>
  )
}

export default Introduction;