import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibleTodos } from '../../Store/todoSlice'

import styles from './Search.module.scss'

export const Search = () => {
  const { doneTodo, allTodos } = useSelector((state) => state.todos)
  const inputRef = useRef()
  const dispatch = useDispatch()

  const searchTask = (e) => {
    let visibleTasks = allTodos.filter((element) => {
      return (element.title + element.desc + element.time)
        .toLowerCase()
        .indexOf(e.target.value.toLocaleLowerCase()) > -1
        ? element
        : null
    })
    if (e.target.value === '') visibleTasks = []
    dispatch(setVisibleTodos(visibleTasks))
  }

  return (
    <div className={styles.root}>
      <input
        className={styles.search}
        type="text"
        ref={inputRef}
        placeholder="Enter name, description or date your task"
        onChange={searchTask}
      />
      <Link to="/doneList" className={styles.btn}>
        Done <span className={styles.counter}> {doneTodo.length} </span>
      </Link>
    </div>
  )
}
