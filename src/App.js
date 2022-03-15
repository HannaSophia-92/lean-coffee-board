import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Entry from './components/Entry';
import FormEntry from './components/FormEntry';

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();

    async function getEntries() {
      const response = await fetch('/api/entries');
      const entries = await response.json();
      setEntries(entries);
    }
  }, []);

  return (
    <AppLayout>
      <Header>Lean Coffee Board</Header>
      <Grid role="list">
        {entries.map(({ text, author }, index) => (
          <li key={index}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </Grid>
      <FormEntry />
    </AppLayout>
  );
}

const AppLayout = styled.main`
  display: grid;
  grid-template-rows: 64px auto 64px;
  height: 100vh;
`;

const Grid = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 20px;
  overflow-y: auto;
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  background-color: #00beb7;
  color: white;
  font-family: 'Nothing You Could Do', cursive;
  padding: 15px;
`;
