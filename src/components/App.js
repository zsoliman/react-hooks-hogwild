import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import Filter from "./Filter"

import hogs from "../porkers_data";




function App() {

	const [showGreased, setShowGreased] = useState('All')

	const toggleGreased = (e) => {
		setShowGreased((showGreased) === e.target.value)
		console.log(e.target.value)
		console.log(showGreased)
	}

	return (
		<div className="App">
			<Nav />
			<Filter hogs={hogs} toggleGreased={toggleGreased} /> <br />
			<TileList hogs={hogs} />
		</div>
	);
}

export default App;
