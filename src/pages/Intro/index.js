import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Intro({ history, location }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    async function loadData() {
      const { state } = location;
      if (state) {
        setTitle(state.title);
        setMessage(state.message);
      } else {
        const ls = JSON.parse(await localStorage.getItem('starwars-react'));

        if (ls) {
          setTitle(ls.title);
          setMessage(ls.message);
        } else {
          toast.warn(
            'Nenhuma mensagem ou texto foi recebido! Tente novamente!'
          );
          history.push('/');
        }
      }
    }

    loadData();
  }, [history, location]);

  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      if (width !== window.innerWidth) {
        setWidth(window.innerWidth);
      }
    }
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <span style={{ fontSize: `${width / 30}px` }}>
        A Long Time Ago, in a galaxy far,
        <br /> far away...
      </span>
      <section style={{ fontSize: `${width / 20}px` }}>
        <p>{title}</p>
        <p>{message}</p>
      </section>
    </Container>
  );
}

Intro.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
    }),
  }).isRequired,
};
