import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders two input field and a button', () => {
    render(<Login />);

    const form = screen.getByRole('form', { name: /save/i });
    const inputName = screen.getByLabelText(/Enter your name/i);
    const inputColor = screen.getByLabelText(/Choose a color/i);
    const submitButton = screen.getByRole('button', {
      name: /save/i,
    });

    expect(form).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputColor).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
