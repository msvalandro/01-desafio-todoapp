import styled from 'styled-components'

export const TodoListContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  > header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
  }
`

export const CounterContainer = styled.div`
  &:first-child span {
    color: ${(props) => props.theme.blue};
  }

  &:last-child span {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.875rem;
    font-weight: bold;

    &:last-child {
      margin-left: 8px;
      padding: 0 0.5rem;

      background: ${(props) => props.theme['gray-400']};
      border-radius: 999px;

      font-size: 0.75rem;
      color: ${(props) => props.theme['gray-200']};

      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const EmptyList = styled.div`
  height: 244px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-300']};

    &:first-child {
      font-weight: bold;
    }
  }
`

interface TodoCardProps {
  finished: boolean
}

export const TodoCard = styled.li<TodoCardProps>`
  height: 72px;
  margin-bottom: 1rem;
  padding: 1rem;

  font-size: 0.875rem;
  color: ${(props) =>
    props.finished ? props.theme['gray-300'] : props.theme['gray-100']};
  text-decoration: ${(props) => (props.finished ? 'line-through' : 'none')};

  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  display: flex;

  input {
    height: 24px;
    margin-right: 0.5rem;

    &:focus {
      outline: 0;
    }
  }

  p {
    flex: 1;
  }

  svg {
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;
  }
`
