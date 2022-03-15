import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';

export default function FormEntry({ entry, placeholder, newEntry, onChange }) {
  return (
    <FormEenty onSubmit={handleSubmit}>
      <label htmlFor={entry}></label>
      <Input
        type="text"
        id={entry}
        name={entry}
        placeholder="Add lean coffee note"
        value={newEntry}
        onChange={onChange}
      ></Input>
      <Button>
        <FaPlusCircle />
      </Button>
    </FormEenty>
  );

  function handleSubmit(event) {
    event.preventDefault();
  }
}

const FormEenty = styled.form`
  display: flex;
  align-items: center;
  background-color: #332f2f;
  width: 100%;
  padding: 16px;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: white;
  width: inherit;
  &::placeholder {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.8em;
`;
