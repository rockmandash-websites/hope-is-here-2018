import React, { memo } from 'react';
import { ClassNames } from '@emotion/core';
import Button from '@material-ui/core/Button';

const PrimaryButton = ({ children, ...rest }) => {
  return (
    <ClassNames>
      {({ css }) => (
        <Button
          {...rest}
          classes={{
            root: css`
              &&& {
                display: block;
                border-radius: 1000px;
                color: white;
                border: 1px solid white;
                background-color: rgba(255, 255, 255, 0.1);
                width: 90%;
                max-width: 300;
                margin: 0 auto 15px;
              }
            `,
            label: css`
              &&& {
                font-size: 1.1rem;
                font-weight: 300;
                letter-spacing: 1px;
              }
            `
          }}
        >
          {children}
        </Button>
      )}
    </ClassNames>
  );
};

export default memo(PrimaryButton);
