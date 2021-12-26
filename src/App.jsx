import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Index, Notfound } from './indexfiles';
import './style.css';

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="home" element={<Home />} />
        <Route path="channels">
          <Route path=":id" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="favorites" element={<Home />} />
        <Route path="settings" element={<Notfound />} />
        <Route index element={<Index />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}
