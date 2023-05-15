import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './DoneList.module.scss'

export const DoneList = () => {
  const navigate = useNavigate()
  const { doneTodo } = useSelector((state) => state.todos)
  return (
    <div className={styles.root}>
      <p className={styles.title}> List of done to do</p>
      {doneTodo.length === 0 ? (
        <p className={styles.text}>You haven't done anything yet...</p>
      ) : null}
      <button onClick={() => navigate(-1)} className={styles.btn}>
        Back
      </button>
      <ul className={styles.list}>
        {doneTodo.map((el) => {
          return (
            <li className={styles.item} key={el.id}>
              <p className={styles.itemText}>Name: {el.title}</p>
              <p className={styles.itemText}>Description: {el.desc} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
