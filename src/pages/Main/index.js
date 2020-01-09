import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, TextArea, Button } from './styles';

export default function Main({ history }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadData() {
      const ls = JSON.parse(await localStorage.getItem('starwars-react'));
      if (ls) {
        setTitle(ls.title);
        setMessage(ls.message);
      }
    }

    loadData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      message,
    };

    await localStorage.setItem('starwars-react', JSON.stringify(data));

    history.push('/intro', { ...data });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          rows="16"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button type="submit">Visualizar</Button>
      </form>
    </Container>
  );
}

Main.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
