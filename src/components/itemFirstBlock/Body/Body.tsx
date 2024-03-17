import React from 'react'
import styles from './Body.module.scss'

export const Body = ({text}: {text: string}) => {
  return (
    <div className={styles.bodyContainer}>
    <p>{text}</p>
  </div>
  )
}
