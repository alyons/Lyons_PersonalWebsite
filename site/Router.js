import React from 'react';
import { Route, Routes } from 'react-router';

import Main from './pages/Main';

const Router = (props) => {
  return (
    <Routes>
      <Route path='*' element={<Main />} />
    </Routes>
  );
};

export default Router;
