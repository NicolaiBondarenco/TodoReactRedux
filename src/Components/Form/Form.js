import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodos } from '../../Store/todoSlice'
import { Button } from '../../ui/Button/Button'
import { Input } from '../../ui/Input/Input'

import styles from './Form.module.scss'

const addIcon = require('../../Assets/images/add.png')

export const Form = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [time, setTime] = useState('')
  const dispatch = useDispatch()

  const addTask = (e) => {
    e.preventDefault()
    const trimName = name.trim()
    const trimDesc = desc.trim()
    if (trimName === '' && trimDesc === '') return
    const createId = uuidv4()
    dispatch(
      addTodos({
        title: name,
        desc: desc,
        time: time,
        id: createId,
        done: false,
      }),
    )
    setName('')
    setDesc('')
    setTime('')
  }

  return (
    <form className={styles.root} action="#" method="post">
      <div className={styles.wrapper}>
        <Input
          type="text"
          placeholder="Name task..."
          value={name}
          onHandleChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Desc task..."
          value={desc}
          onHandleChange={(e) => setDesc(e.target.value)}
        />
        <Input
          type="date"
          value={time}
          onHandleChange={(e) => setTime(e.target.value)}
        />
      </div>
      <Button image={addIcon} type="submit" onHandleClick={(e) => addTask(e)} />
    </form>
  )
}
