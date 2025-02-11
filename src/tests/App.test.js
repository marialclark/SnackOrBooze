import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import SnackOrBoozeApi from '../Api';

jest.mock('../Api');

// Provide default resolved values so that the loading state is bypassed.
beforeEach(() => {
	SnackOrBoozeApi.getSnacks.mockResolvedValue([
		{ id: 's1', name: 'Test Snack' },
	]);
	SnackOrBoozeApi.getDrinks.mockResolvedValue([
		{ id: 'd1', name: 'Test Drink' },
	]);
});

test('App renders without crashing', async () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	// Wait for the loading indicator to disappear.
	await waitFor(() =>
		expect(screen.queryByText(/Loading/)).not.toBeInTheDocument()
	);
});

test('NavBar has expected links', async () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	// Wait for loading to finish
	await waitFor(() =>
		expect(screen.queryByText(/Loading/)).not.toBeInTheDocument()
	);

	expect(
		screen.getByText((content) => content.includes('Snack or Booze'))
	).toBeInTheDocument();
	expect(screen.getByText('Snacks')).toBeInTheDocument();
	expect(screen.getByText('Drinks')).toBeInTheDocument();
	expect(screen.getByText('Add Item')).toBeInTheDocument();
});
