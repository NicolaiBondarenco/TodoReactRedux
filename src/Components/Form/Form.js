import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodos } from '../../Store/todoSlice'
import { Button } from '../../ui/Button/Button'
import { Input } from '../../ui/Input/Input'
import addIcon from '../../Assets/images/add.png'
import styles from './Form.module.scss'

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    time: '',
  })
  const dispatch = useDispatch()

  const handleChange = (value, name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const addTask = (e) => {
    e.preventDefault()
    if (formData.name.trim() === '' && formData.desc.trim() === '') return
    const createId = uuidv4()
    dispatch(
      addTodos({
        name: formData.name,
        desc: formData.desc,
        time: formData.time,
        id: createId,
        done: false,
      }),
    )
    setFormData({
      name: '',
      desc: '',
      time: '',
    })
  }

  return (
    <form className={styles.root}>
      <div className={styles.wrapper}>
        <Input
          type="text"
          placeholder="Name task..."
          value={formData.name}
          name="name"
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Desc task..."
          value={formData.desc}
          name="desc"
          onHandleChange={handleChange}
        />
        <Input
          type="date"
          value={formData.time}
          name="time"
          onHandleChange={handleChange}
        />
      </div>
      <Button image={addIcon} type="submit" onHandleClick={(e) => addTask(e)} />
    </form>
  )
}
