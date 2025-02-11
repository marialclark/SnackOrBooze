import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import Menu from './Menu';
import Item from './Item';
import NewItemForm from './NewItemForm';

/**
 * App: top-level component.
 *
 * State:
 *  - isLoading: boolean for loading status
 *  - snacks: array of snack objects
 *  - drinks: array of drink objects
 *
 * Effects:
 *  - On mount, fetches snacks and drinks from the API.
 *
 * Routes:
 *  - '/'            -> Home (displays snack & drinks counts)
 *  - '/snacks'      -> Menu (component for snacks)
 *  - '/snacks/:id'  -> Renders specific snack (redirects if not found)
 *  - '/drinks'      -> Menu (component for drinks)
 *  - '/drinks/:id'  -> Renders specific drink (redirects if not found)
 *  - '/new'         -> NewItemForm
 *  - '*'            -> 404 fallback
 */
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [snacks, setSnacks] = useState([]);
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const snacksFromApi = await SnackOrBoozeApi.getSnacks();
				const drinksFromApi = await SnackOrBoozeApi.getDrinks();
				setSnacks(snacksFromApi);
				setDrinks(drinksFromApi);
				setIsLoading(false);
			} catch (err) {
				console.error('API Error:', err);
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<NavBar />
			<main>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								snacks={snacks}
								drinks={drinks}
							/>
						}
					/>

					<Route
						path="/snacks"
						element={
							<Menu
								items={snacks}
								title="Snacks"
							/>
						}
					/>

					<Route
						path="/snacks/:id"
						element={
							<Item
								items={snacks}
								cantFind="/snacks"
							/>
						}
					/>

					<Route
						path="/drinks"
						element={
							<Menu
								items={drinks}
								title="Drinks"
							/>
						}
					/>

					<Route
						path="/drinks/:id"
						element={
							<Item
								items={drinks}
								cantFind="/drinks"
							/>
						}
					/>

					<Route
						path="/new"
						element={<NewItemForm />}
					/>

					<Route
						path="*"
						element={
							<div className="not-found">
								<p>Hmmm. I can't seem to find what you want.</p>
							</div>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
