import React from 'react'
import { Form } from '../Form/Form'
import { TodoItem } from '../TodoItem/TodoItem'
import { Search } from '../Search/Search'
import { useSelector } from 'react-redux'
import { EditTodo } from '../EditTodo/EditTodo'

import styles from './TodoList.module.scss'

export const TodoList = () => {
  const { allTodos, visibleTodos } = useSelector((state) => state.todos)
  const { editedTodo } = useSelector((state) => state.editTodos)

  const renderArray = visibleTodos.length > 0 ? visibleTodos : allTodos

  const renderTodoItem = (todo) => {
    return (
      <TodoItem
        name={todo.name}
        desc={todo.desc}
        time={todo.time}
        key={todo.id}
        id={todo.id}
        done={todo.done}
      />
    )
  }

  return (
    <div className={styles.root}>
      <Search />
      <h2 className={styles.title}>Todo List</h2>
      {editedTodo.id && <EditTodo />}
      {!editedTodo.id && <Form />}
      {allTodos.length >= 1 ? (
        <ul>{renderArray.map(renderTodoItem)}</ul>
      ) : (
        <p className={styles.text}> Please add your task!!!</p>
      )}
    </div>
  )
}
