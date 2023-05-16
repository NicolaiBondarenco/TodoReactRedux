import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodos, toggleDoneTodos } from '../../Store/todoSlice'
import { openEditBlock } from '../../Store/editSlice'
import { Button } from '../../ui/Button/Button'
import { TodoProperty } from '../TodoProperty/TodoProperty '

import checkMarkIcon from '../../Assets/images/checkmark.png'
import markIcon from '../../Assets/images/mark.png'
import trashIcon from '../../Assets/images/trash.png'
import editIcon from '../../Assets/images/edit.png'

import styles from './TodoItem.module.scss'

export const TodoItem = ({ name, desc, time, id, done }) => {
  const dispatch = useDispatch()

  const handleToggleDone = () => {
    dispatch(toggleDoneTodos(id))
  }

  const handleEdit = () => {
    dispatch(openEditBlock({ name, desc, time, id, done }))
  }

  const handleRemove = () => {
    dispatch(removeTodos(id))
  }

  return (
    <li className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperImg}>
          {done && (
            <img className={styles.img} src={checkMarkIcon} alt="CheckMark" />
          )}
        </div>
        <div className={styles.boxtext}>
          <TodoProperty title="Name" text={name} />
          <TodoProperty title="Desc" text={desc} />
          <TodoProperty title="Time frame" text={time} />
        </div>
      </div>
      <div className={styles.boxbtn}>
        <Button image={markIcon} onHandleClick={handleToggleDone} />
        <Button image={editIcon} onHandleClick={handleEdit} />
        <Button image={trashIcon} onHandleClick={handleRemove} />
      </div>
    </li>
  )
}
