import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home, Notfound } from './indexfiles';
import "./style.css";

export default function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="channels" element={<Home />} />
				<Route path=":id" element={<Home />} />
				<Route path="" element={<Home />} />
				<Route index element={<Home />} />
			<Route path="favorites" element={<Home />} />
			<Route path="settings" element={<Home />} />
			<Route path="" element={<Notfound />} />
		</Routes>
  );
}
