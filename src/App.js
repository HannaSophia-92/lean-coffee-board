import styled from 'styled-components';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });

  if (entriesError) return <h1>Sorry, could not fetch</h1>;

  return (
    <AppLayout>
      <Header>Lean Coffee Board</Header>
      <EntryList role="list">
        <Title>Lean Coffee</Title>
        {entries
          ? entries.map(({ text, author, _id }) => (
              <li key={_id}>
                <Entry text={text} author={author} />
              </li>
            ))
          : '... loading ...'}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </AppLayout>
  );

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: 'Anonymous',
      tempId: Math.random(),
    };

    mutateEntries([...entries, newEntry], false);

    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });
    mutateEntries();
  }
}

const AppLayout = styled.main`
  display: grid;
  grid-template-rows: 64px auto 64px;
  height: 100vh;
`;

const EntryList = styled.ul`
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
