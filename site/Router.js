import React from 'react';
import { Route, Routes } from 'react-router';

import ContentPage from './pages/ContentPage';
import ErrorPage from './pages/ErrorPage';
import HueShiftingPage from './pages/HueShiftingPage';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';

const Router = (props) => {
  return (
    <Routes>
      <Route path='/content/:id' element={<ContentPage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='/hue-shifting' element={<HueShiftingPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
