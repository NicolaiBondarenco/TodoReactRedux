import React from 'react'
import styles from './Input.module.scss'

export const Input = ({ type, placeholder, name, value, onHandleChange }) => {
  // console.log(value)
  return (
    <input
      className={styles.root}
      type={type}
      placeholder={placeholder || null}
      value={value}
      onChange={(e) => onHandleChange(e.target.value, name)}
    />
  )
}
