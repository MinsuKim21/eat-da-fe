import React from 'react';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import NotFoundPage from '../pages/err';
import Home from '../pages/home';


export default function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
