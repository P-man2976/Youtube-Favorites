import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/index';
import "./style.css";

export default function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
  );
}
