import React from 'react'
import styles from './TitleBlock.module.scss'
import { First } from '@/app/svg/First/First'

export const TitleBlock = ({title}: {title:string}) => {
  return (
    <div className={styles.titleBlock}>
    <First />
    <h2>{title}</h2>
  </div>
  )
}
