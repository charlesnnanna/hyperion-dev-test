import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Header from './Header';

//prettier-ignore
test('Check button in header', () => {
    render(<Header/>)
  const button = screen.getByText(/begin trial/i);
  expect(button).toBeDefined();
})
