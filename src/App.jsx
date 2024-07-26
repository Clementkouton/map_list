import React, { useState } from 'react';
import data from '../public/Data/data';
import List from './Components/List';
import './App.css';

function App() {
  const [members, setMembers] = useState(data);

  const handleDelete = (id) => {
    // Filter members and update state
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers); // Trigger re-render
  };

  return (
    <>
      <main>
        <section className="container">
          <h1>La liste des membres de l'Agence Elevated-Web</h1>
          <h3>Nous avons {members.length} membres dans notre Agence</h3>
          <List members={members} onDelete={handleDelete} />
        </section>
      </main>
    </>
  );
}

export default App;