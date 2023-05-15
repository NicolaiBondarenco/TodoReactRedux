import React from 'react'
import styles from './Input.module.scss'

export const Input = ({ type, placeholder, value, onHandleChange }) => {
  return (
    <input
      className={styles.root}
      type={type}
      placeholder={placeholder || null}
      value={value}
      onChange={(value) => onHandleChange(value)}
    />
  )
}
