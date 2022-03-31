import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';


describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/pics.io/i)).toBeInTheDocument();
  })
})
