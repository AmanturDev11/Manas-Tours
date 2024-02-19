import React from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Header from "./components/layout/header/Header";

const App = () => {
	return (
		<div>
			<Header />
			<NewExpense />
		</div>
	);
};

export default App;
