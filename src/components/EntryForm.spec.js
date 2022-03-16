import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';
import userEvent from '@testing-library/user-event';

describe('EntryForm', () => {
  it('renders a form and an input field', () => {
    const callback = jest.fn();
    render(<EntryForm onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create new entry' });
    expect(form).toBeInTheDocument();

    const input = screen.getByLabelText(/entry text/i);
    userEvent.type(input, 'Lorem ipsum dolor sit.{enter}');
    expect(form).toContainElement(input);
    expect(callback).toHaveBeenCalledWith({ text: 'Lorem ipsum dolor sit.' });
  });
});
