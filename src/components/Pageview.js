import React, { memo, useEffect } from 'react';
import { Location } from '@reach/router';
import analytics from 'analytics';

const InnerPageview = memo(({ pathname }) => {
  useEffect(
    () => {
      analytics({
        type: 'pageview',
        virtualPathname: pathname
      });
    },
    [pathname]
  );
  return null;
});

const Pageview = () => {
  return (
    <Location>
      {({ location }) => <InnerPageview pathname={location.pathname} />}
    </Location>
  );
};

export default memo(Pageview);
