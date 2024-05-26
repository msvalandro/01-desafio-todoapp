import { Article, Trash } from '@phosphor-icons/react'

import { TodoItem } from '../..'
import {
  CounterContainer,
  EmptyList,
  TodoCard,
  TodoListContainer,
} from './styles'

interface TodoListProps {
  items: TodoItem[]
  onFinishItem: (id: number) => void
  onDeleteItem: (id: number) => void
}

export function TodoList({ items, onFinishItem, onDeleteItem }: TodoListProps) {
  const numberOfItems = items.length
  const numberOfFinishedItems = items.filter((item) => item.finished).length

  return (
    <TodoListContainer>
      <header>
        <CounterContainer>
          <span>Tarefas criadas</span>
          <span>{numberOfItems}</span>
        </CounterContainer>

        <CounterContainer>
          <span>Concluídas</span>
          <span>
            {numberOfItems > 0
              ? `${numberOfFinishedItems} de ${numberOfItems}`
              : 0}
          </span>
        </CounterContainer>
      </header>

      {items.length === 0 && (
        <EmptyList>
          <Article size={56} />

          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </EmptyList>
      )}

      {items.length > 0 && (
        <ul>
          {items.map(({ id, description, finished }) => (
            <TodoCard key={id} finished={finished}>
              <input type="checkbox" onChange={() => onFinishItem(id)} />

              <p>{description}</p>

              <Trash size={16} onClick={() => onDeleteItem(id)} />
            </TodoCard>
          ))}
        </ul>
      )}
    </TodoListContainer>
  )
}
