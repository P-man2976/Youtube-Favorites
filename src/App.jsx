import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Notfound } from './indexfiles';
import './style.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Notfound />} />
      	<Route path="channels" element={<Notfound />} />
      		<Route path=":id" element={<Notfound />} />
      		<Route path="*" element={<Notfound />} />
      		<Route index element={<Home />} />
      	<Route path="favorites" element={<Home />} />
      	<Route path="settings" element={<Home />} />
      	<Route path="*" element={<Notfound />} />
    </Routes>
  );
}
