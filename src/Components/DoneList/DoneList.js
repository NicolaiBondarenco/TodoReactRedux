import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TodoProperty } from '../TodoProperty/TodoProperty '

import styles from './DoneList.module.scss'

export const DoneList = () => {
  const navigate = useNavigate()
  const { doneTodo } = useSelector((state) => state.todos)

  const renderItem = (el) => {
    return (
      <li className={styles.item} key={el.id}>
        <TodoProperty title="Name" text={el.name} />
        <TodoProperty title="Desc" text={el.desc} />
        <TodoProperty title="Time frame" text={el.time} />
      </li>
    )
  }

  return (
    <div className={styles.root}>
      <p className={styles.title}> List of done to do</p>
      {doneTodo.length === 0 && (
        <p className={styles.text}>You haven't done anything yet...</p>
      )}
      <button onClick={() => navigate(-1)} className={styles.btn}>
        Back
      </button>
      <ul className={styles.list}>{doneTodo.map(renderItem)}</ul>
    </div>
  )
}
