import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewItemForm from '../NewItemForm';
import SnackOrBoozeApi from '../Api';

// Mock full API
jest.mock('../Api');

test('NewItemForm renders without crashing', () => {
  render(
    <MemoryRouter>
      <NewItemForm />
    </MemoryRouter>
  );
  expect(screen.getByText('Add a New Item')).toBeInTheDocument();
});

test('NewItemForm calls Api.addItem on submit', async () => {
  SnackOrBoozeApi.addItem.mockResolvedValueOnce({ id: 'test-item', name: 'Test Item' });
  
  render(
    <MemoryRouter>
      <NewItemForm />
    </MemoryRouter>
  );
  
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test Item' } });
  fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'A test item' } });
  fireEvent.change(screen.getByLabelText('Recipe'), { target: { value: 'Mix well' } });
  fireEvent.change(screen.getByLabelText('Serve'), { target: { value: 'Chill' } });
  
  fireEvent.click(screen.getByText('Add Item'));
  
  await waitFor(() => {
    expect(SnackOrBoozeApi.addItem).toHaveBeenCalledTimes(1);
    expect(SnackOrBoozeApi.addItem).toHaveBeenCalledWith(
      'snacks',
      expect.objectContaining({ id: 'test-item', name: 'Test Item' })
    );
  });
});
