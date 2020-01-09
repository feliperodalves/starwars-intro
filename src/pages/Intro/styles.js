import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    z-index: 1;

    font-family: 'News Cycle', sans-serif;
    color: #00bfff;
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  section {
    width: 100%;

    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'News Cycle', sans-serif;
    font-weight: 700;
    color: #ffd700;

    p {
      text-align: center;
      letter-spacing: 0.1em;
      line-height: 1.1em;
      z-index: 1;
      width: 70%;

      transform-origin: 50%;
      transform: perspective(300px) rotateX(25deg);
    }
  }
`;
