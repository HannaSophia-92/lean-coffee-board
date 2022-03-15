import { render, screen } from '@testing-library/react';
import FormEntry from './FormEntry';

describe('GameForm', () => {
  it('renders an input field and a button', () => {
    render(<FormEntry />);

    const entryInput = screen.getByLabelText(/new entry/i);
    const submitButton = screen.getByRole('button', { name: /add entry/i });

    expect(entryInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
