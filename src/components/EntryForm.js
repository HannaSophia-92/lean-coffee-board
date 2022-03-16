import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function EntryForm({ onSubmit }) {
  return (
    <FormEntry aria-labelledby="entry-form" onSubmit={handleSubmit}>
      <label htmlFor="entry-text">
        <ScreenReaderOnly>Entry text</ScreenReaderOnly>
      </label>
      <Input
        type="text"
        id="entry-text"
        name="entryText"
        placeholder="Add lean coffee note..."
        autoComplete="off"
      ></Input>
      <Button id="entry-form">
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <FaPlusCircle />
      </Button>
    </FormEntry>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.entryText;
    onSubmit(inputElement.value);
    form.reset();
  }
}

const FormEntry = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 16px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: #332f2f;
  width: inherit;
  height: 30px;
  box-shadow: 0 -5px 5px -5px lightgray;
  &::placeholder {
    color: #332f2f;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #332f2f;
  font-size: 1.6em;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #00beb7;
  }
`;
