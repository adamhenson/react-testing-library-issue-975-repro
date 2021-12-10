import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders some thing', async () => {
  render(<App />);
  const thingElement = await screen.findByText('some thing');
  expect(thingElement).toBeInTheDocument();
});

test('does not render some other thing', async () => {
  render(<App />);
  const otherThingElement = await screen.findByText('some other thing');
  expect(otherThingElement).not.toBeInTheDocument();
});
