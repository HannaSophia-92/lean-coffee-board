import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function FormEntry({ newEntry, onClick }) {
  const [entry, setEntry] = useState('');

  return (
    <FormEenty aria-labelledby="form-entry" onSubmit={handleSubmit}>
      <Label htmlFor="form-entry">New Entry</Label>
      <Input
        type="text"
        id="form-entry"
        name="entry"
        placeholder="Add lean coffee note"
        value={entry}
        onChange={event => setEntry(event.target.value)}
        autoComplete="off"
      ></Input>
      <Button aria-label="Add entry" onClick={onClick}>
        <FaPlusCircle />
      </Button>
    </FormEenty>
  );

  function handleSubmit(event) {
    event.preventDefault();
    setEntry('');
  }
}

const FormEenty = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 16px;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: white;
  width: inherit;
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
  margin: 10px;
`;

const Label = styled.label`
  text-indent: -100em;
`;
