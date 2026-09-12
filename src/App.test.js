import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders SACRA main application without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
