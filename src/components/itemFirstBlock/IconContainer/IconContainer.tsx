import React from 'react'
import styles from './IconContainer.module.scss'
import { Droplet } from '@/app/svg/Droplet/Droplet'

export const IconContainer = ({children}: {children: JSX.Element}) => {
  return (
    <div className={styles.iconContainer}>
        <div className={styles.dinamicIconContainer}>
          {children}
        </div>
        <Droplet />
      </div>
  )
}
