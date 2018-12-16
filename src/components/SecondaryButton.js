import React, { memo } from 'react';
import { ClassNames } from '@emotion/core';
import Button from '@material-ui/core/Button';

const SecondaryButton = ({ children, ...rest }) => {
  return (
    <ClassNames>
      {({ css }) => (
        <Button
          {...rest}
          classes={{
            root: css`
              &&& {
                display: block;
                color: white;
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

export default memo(SecondaryButton);
