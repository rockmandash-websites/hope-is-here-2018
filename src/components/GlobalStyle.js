import { Global } from '@emotion/core';
import css from '@emotion/css/macro';
import React, { memo } from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          line-height: 1.5;
          outline: none;
          font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', SegoeUI, Arial,
            'PingFang TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          -webkit-tap-highlight-color: transparent;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          ::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
        }

        li {
          list-style-type: none;
        }
        button {
          background-color: transparent;
          border: none;
        }
        a {
          text-decoration: none;
        }
        body {
          width: 100%;
          overflow-x: hidden;
        }
        br {
          line-height: 0;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
