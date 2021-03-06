import styled from 'styled-components';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';
import useSWR from 'swr';
import Login from './components/Login';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');

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
      {!userName && <Login onSubmit={handleLogin} />}
      {userName && (
        <>
          <EntryList role="list">
            {entries
              ? entries.map(
                  ({ text, author, _id, tempId, color, createdAt }) => (
                    <li key={_id ?? tempId}>
                      <Entry
                        text={text}
                        author={author}
                        color={color}
                        createdAt={createdAt}
                        onDelete={() => handleDelete(_id)}
                      />
                    </li>
                  )
                )
              : '... loading ...'}
          </EntryList>
          <EntryForm onSubmit={handleNewEntry} />
        </>
      )}
    </AppLayout>
  );

  function handleLogin(name, color) {
    const newUser = name;
    setUserName(newUser);
    const newUserColor = color;
    setUserColor(newUserColor);
  }

  async function handleNewEntry(text) {
    const newEntry = {
      text: text,
      author: userName,
      color: userColor,
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
  async function handleDelete(_id) {
    await fetch('/api/entries', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
    mutateEntries();
  }
}

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 64px auto 64px;
  height: 100vh;
`;

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  margin: 20px;
  list-style: none;
  overflow-y: auto;
`;

const Header = styled.h1`
  background-color: #00beb7;
  color: white;
  font-family: 'Nothing You Could Do', cursive;
  padding: 15px;
`;
