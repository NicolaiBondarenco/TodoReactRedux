import React from 'react'

import styles from './TodoProperty.module.scss'

export const TodoProperty = ({ title, text }) => {
  return (
    <p>
      {title}: <span className={styles.root}>{text}</span>
    </p>
  )
}
