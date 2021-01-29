import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/LIST OF RECEIPES/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check \'ADD NEW DISH\' Button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add New Dish/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveAttribute('type')
  expect(screen.getByRole('button')).toHaveTextContent('Add New Dish')
});

test('Check \'Search\' Input', () => {
  render(<App />);
  expect(screen.getByRole('textbox')).toHaveProperty('name')
  const labelTest = screen.getByLabelText(/Search/i);
  expect(labelTest).toBeInTheDocument();
});
