import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodos, toggleDoneTodos } from '../../Store/todoSlice'
import { openEditBlock } from '../../Store/editSlice'
import { Button } from '../../ui/Button/Button'

import styles from './TodoItem.module.scss'

const checkMarkIcon = require('../../Assets/images/checkmark.png')
const markIcon = require('../../Assets/images/mark.png')
const trashIcon = require('../../Assets/images/trash.png')
const editIcon = require('../../Assets/images/edit.png')

export const TodoItem = ({ title, desc, time, id, done }) => {
  const dispatch = useDispatch()

  return (
    <li className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperImg}>
          {done ? (
            <img className={styles.img} src={checkMarkIcon} alt="CheckMark" />
          ) : null}
        </div>
        <div className={styles.boxtext}>
          <p>
            Name: <span className={styles.text}>{title}</span>
          </p>

          <p>
            Desc: <span className={styles.text}>{desc}</span>
          </p>
          <p>
            Time frame: <span className={styles.text}>{time}</span>
          </p>
        </div>
      </div>
      <div className={styles.boxbtn}>
        <Button
          image={markIcon}
          onHandleClick={() => dispatch(toggleDoneTodos(id))}
        />
        <Button
          image={editIcon}
          onHandleClick={() => {
            dispatch(
              openEditBlock({
                title: title,
                desc: desc,
                time: time,
                id: id,
                done: done,
              }),
            )
          }}
        />
        <Button
          image={trashIcon}
          onHandleClick={() => dispatch(removeTodos(id))}
        />
      </div>
    </li>
  )
}
