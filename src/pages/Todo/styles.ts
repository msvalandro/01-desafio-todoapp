import styled from 'styled-components'

export const TodoContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  height: 200px;

  background: ${(props) => props.theme['gray-700']};

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-left: 0.75rem;

    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1.4;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.blue},
      ${(props) => props.theme['purple-dark']}
    );
    color: transparent;

    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
  }
`

export const TodoContent = styled.main`
  width: 736px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AddTodoForm = styled.form`
  height: 3rem;
  width: 100%;
  margin-top: -1.5rem;

  display: flex;
  gap: 0.5rem;

  input {
    padding: 0 8px;

    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;

    flex: 1;
  }

  button {
    width: 90px;

    background: ${(props) => props.theme['blue-dark']};
    border: 0;
    border-radius: 8px;

    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.4;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    cursor: pointer;
  }
`
