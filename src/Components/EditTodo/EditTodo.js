import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeEditedBlock, changeMultiply } from '../../Store/editSlice'
import { editingTodos, setVisibleTodos } from '../../Store/todoSlice'
import { Input } from '../../ui/Input/Input'

import styles from './EditTodo.module.scss'

export const EditTodo = () => {
  const { editedTodo } = useSelector((state) => state.editTodos)
  const dispatch = useDispatch()

  const handleChangeMultiply = (value, name) => {
    dispatch(changeMultiply({ value, name }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(
      editingTodos({
        desc: editedTodo.desc,
        done: editedTodo.done,
        id: editedTodo.id,
        time: editedTodo.time,
        name: editedTodo.name,
      }),
    )
    dispatch(closeEditedBlock())
    dispatch(setVisibleTodos([]))
  }

  const handleClose = () => {
    dispatch(closeEditedBlock())
  }

  return (
    <form className={styles.root}>
      <Input
        type="text"
        placeholder="Name task..."
        value={editedTodo.name}
        name="name"
        onHandleChange={handleChangeMultiply}
      />
      <Input
        type="text"
        placeholder="Desc task..."
        value={editedTodo.desc}
        name="desc"
        onHandleChange={handleChangeMultiply}
      />
      <Input type="date" name="time" onHandleChange={handleChangeMultiply} />
      <div className={styles.wrapper}>
        <button type="submit" onClick={handleSave}>
          Save
        </button>
        <button onClick={handleClose} type="button">
          Close
        </button>
      </div>
    </form>
  )
}
