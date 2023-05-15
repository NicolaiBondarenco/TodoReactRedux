import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  closeEditedBlock,
  changeName,
  changeDesc,
  changeTime,
} from '../../Store/editSlice'
import { editingTodos } from '../../Store/todoSlice'
import { setVisibleTodos } from '../../Store/todoSlice'
import { Input } from '../../ui/Input/Input'

import styles from './EditTodo.module.scss'

export const EditTodo = () => {
  const { editedTodo } = useSelector((state) => state.editTodos)
  const dispatch = useDispatch()

  return (
    <form className={styles.root} action="#" method="post">
      <Input
        type="text"
        placeholder="Name task..."
        value={editedTodo.title}
        onHandleChange={(e) => dispatch(changeName(e.target.value))}
      />
      <Input
        type="text"
        placeholder="Desc task..."
        value={editedTodo.desc}
        onHandleChange={(e) => dispatch(changeDesc(e.target.value))}
      />
      <Input
        type="date"
        onHandleChange={(e) => dispatch(changeTime(e.target.value))}
      />
      <div className={styles.wrapper}>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            dispatch(
              editingTodos({
                desc: editedTodo.desc,
                done: editedTodo.done,
                id: editedTodo.id,
                time: editedTodo.time,
                title: editedTodo.title,
              }),
            )
            dispatch(closeEditedBlock())
            dispatch(setVisibleTodos([]))
          }}
        >
          Save
        </button>
        <button onClick={() => dispatch(closeEditedBlock())} type="button">
          Close
        </button>
      </div>
    </form>
  )
}
