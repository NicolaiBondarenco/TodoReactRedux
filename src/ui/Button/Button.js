import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ type, image, onHandleClick }) => {
  return (
    <button
      className={styles.root}
      type={type || null}
      onClick={(value) => onHandleClick(value)}
    >
      <img src={image} alt="ImageIcon" />
    </button>
  )
}
