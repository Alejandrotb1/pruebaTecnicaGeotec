import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../src/components/layout/NavBar';

import '@testing-library/jest-dom';


describe('NavBar', () => {
  test('renders navigation links', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Mis Curiosidades/i)).toBeInTheDocument();
  });
});
