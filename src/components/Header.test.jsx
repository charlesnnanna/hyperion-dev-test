import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import Header from './Header';

describe('Header', () => {
  test('renders completely', () => {
    render(<Header />);

    const imageElement = screen.getByAltText('HyperionDev');
    expect(imageElement).toBeInTheDocument();
  });

  test('render moon icon', () => {
    render(<Header />);

    const moonElement = screen.getByRole('button', {
      value: { description: 'moon-icon' },
    });
    expect(moonElement).toBeInTheDocument();
  });

  test('renden the begin-trial button', () => {
    render(<Header />);

    const buttonElement = screen.getByRole('button', {
      name: /begin trial/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
