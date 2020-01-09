import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;

  line-height: 50px;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);

  padding: 10px 30px;

  border: none;
  border-radius: 35px;
`;

export const TextArea = styled.textarea`
  margin-bottom: 15px;

  line-height: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);

  padding: 20px 30px;

  border: none;
  border-radius: 35px;

  overflow-y: scroll;
  resize: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  margin-bottom: 15px;

  line-height: 50px;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  background: rgba(255, 0, 0, 0.5);

  padding: 10px 30px;

  border: none;
  border-radius: 35px;

  transition: 0.2s;
  transition-timing-function: ease-in-out;

  :hover {
    background: rgba(0, 255, 0, 0.5);
  }
`;
