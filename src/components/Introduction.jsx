/**@jsxRuntime classic */
/**@jsx jsx */
import React from 'react';
import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { jsx, css } from '@emotion/react';

const introduction = `

# YouTube Favorites

YouTube Favoritesとは、YouTubeのお気に入りチャンネルの配信予定・アーカイブをチェックできるサービスです。
Googleアカウントでログインすることなく、お気に入りのチャンネルの通知を受け取ったり、チャンネルの今後の予定を確認することができます。

## How to use

### チャンネルを検索する

#### チャンネルURLを使って検索する

1. 検索したいチャンネルのURLをコピー
1. 画面上部の検索窓にURLを貼り付ける

#### チャンネルIDを使って検索する

1. 検索したいチャンネルのIDをコピー  
([チャンネルIDの検索方法](https://helpfan.jp/user/buzzaid_faq/toolfaq/download/youtube_channelid.html))
1. 画面上部の検索窓にIDを貼り付ける

### お気に入りチャンネルを登録する

1. 画面上部の検索窓からチャンネルを検索
1. ☆ボタンを押してお気に入りに登録

### お気に入りチャンネル一覧を見る

1. 画面上部のメニューから、「お気に入り」を選ぶ

## このサイトについて



`

const introductionCss = css `
  background-color: #f9f9f9;
  max-width: 100vw;
  min-height: 100vh;
  padding: 10px;
  font-family: sans-serif;

  .markdown {
    font-family: sans-serif;

    h1 {
      text-align: center;
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      color: #ee0000
    }

    h2 {
      font-family: sans-serif;
      font-weight: 700;
      border-radius: 4px;
      background-color: #dd0000;
      color: white;
      padding: 10px 15px;
    }

    h3 {
      font-family: sans-serif;
      border-bottom: 3px solid #cc0000;
    }

    h4 {
      font-family: sans-serif;
    }

    h5 {
      font-family: sans-serif;
    }

    p {
      font-family: sans-serif;
    }

    ul, ol {
      padding: 0 0 0.5em 1.5em;
    }
    
    ul > li,
    ol > li {
      position: relative;
      margin: 5px 0;
    }
  }
`
const markdownCss = css `
  font-family: sans-serif;
`

const Introduction = () => {
  return (
    <>
      <Box css={introductionCss}>
          <ReactMarkdown className="markdown">
            {introduction}
          </ReactMarkdown>
      </Box>
    </>
  )
}

export default Introduction;