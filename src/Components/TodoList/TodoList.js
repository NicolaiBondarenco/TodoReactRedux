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

  return (
    <div className={styles.root}>
      <Search />
      <h2 className={styles.title}>Todo List</h2>
      {editedTodo.id ? <EditTodo /> : <Form />}
      {allTodos.length >= 1 ? (
        <ul>
          {renderArray.map((el) => {
            return (
              <TodoItem
                title={el.title}
                desc={el.desc}
                time={el.time}
                key={el.id}
                id={el.id}
                done={el.done}
              />
            )
          })}
        </ul>
      ) : (
        <p className={styles.text}> Please add your task!!!</p>
      )}
    </div>
  )
}
