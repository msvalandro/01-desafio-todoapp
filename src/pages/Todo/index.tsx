import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import logoImg from '../../assets/rocket.svg'
import { TodoList } from './components/TodoList'
import { AddTodoForm, Header, TodoContainer, TodoContent } from './styles'

export interface TodoItem {
  id: number
  description: string
  finished: boolean
}

const newTodoItem = z.object({
  description: z.string().min(1, 'Informe a tarefa'),
})

type NewTodoItem = z.infer<typeof newTodoItem>

export function Todo() {
  const [todoList, setTodoList] = useState<TodoItem[]>([])

  const { register, handleSubmit, reset } = useForm<NewTodoItem>({
    resolver: zodResolver(newTodoItem),
  })

  function handleCreateNewTodo({ description }: NewTodoItem) {
    setTodoList((state) => [
      ...state,
      {
        id: new Date().getTime(),
        description,
        finished: false,
      },
    ])
    reset()
  }

  function handleFinishTodoItem(id: number) {
    const mappedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, finished: !todo.finished } : todo,
    )
    setTodoList(mappedTodoList)
  }

  function handleDeleteTodoItem(id: number) {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(filteredTodoList)
  }

  return (
    <TodoContainer>
      <Header>
        <img src={logoImg} alt="Foguete" />
        <h1>todo</h1>
      </Header>

      <TodoContent>
        <AddTodoForm onSubmit={handleSubmit(handleCreateNewTodo)}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...register('description')}
          />
          <button type="submit">
            Criar <PlusCircle size={18} />
          </button>
        </AddTodoForm>

        <TodoList
          items={todoList}
          onFinishItem={handleFinishTodoItem}
          onDeleteItem={handleDeleteTodoItem}
        />
      </TodoContent>
    </TodoContainer>
  )
}
