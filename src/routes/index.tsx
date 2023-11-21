import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/err';
import Home from '../pages/home';
import Notice from '../pages/notice';
import StorePage from '../pages/store/store-detail';

export default function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:id" element={<StorePage />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
