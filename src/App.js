import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';

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
        <Title>Lean Coffee</Title>
        {entries.map(({ text, author }, index) => (
          <li key={index}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </Grid>
      <EntryForm />
    </AppLayout>
  );
}

const AppLayout = styled.main`
  display: grid;
  grid-template-rows: 64px auto 64px;
  height: 100vh;
`;

const Grid = styled.ul`
  list-style: none;
  padding: 0;
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

const Title = styled.h2`
  font-size: 1.6em;
  border-top: 2px solid #332f2f;
  padding: 15px;
  margin: 15px;
  color: #332f2f;
`;
