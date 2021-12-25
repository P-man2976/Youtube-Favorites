import React from 'react';
import { Header, Introduction } from "./components/index";

const Home = () => {
	return (
		<>
			<Header />
			<Introduction />
			<div>
				<h1>Hello StackBlitz!</h1>
				<p>Start editing to see some magic happen :)</p>
			</div>
		</>
	);
}

export default Home;