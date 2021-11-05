import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import WishListPage from './List';

const WishIndexPage = memo(() => {
  return (
    <Switch>
      <Route path='/' component={WishListPage} />
    </Switch>
  );
});

export default WishIndexPage;
