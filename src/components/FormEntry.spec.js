import { render, screen } from '@testing-library/react';
import FormEntry from './FormEntry';

describe('GameForm', () => {
  it.todo('renders an input field and a button', () => {
    render(<FormEntry />);

    const entryInput = screen.getByLabelText(/new entry/i);
    const submitButton = screen.getByRole('button');

    expect(entryInput).toBeInTheDocument();
    expect(submitButton).toHaveLength(1);
  });
});
