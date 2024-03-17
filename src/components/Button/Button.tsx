'use client'

import React, { useState } from 'react'
import styles from './Button.module.scss'
import { PointerFinger } from '@/app/svg/PointerFinger'
import { Diogramma } from '@/app/svg/Diogramma'

export const Button = ({children}:{children: JSX.Element[] | JSX.Element}) => {
  const [state, setState] = useState(false)

  return (
 <>
      <button className={styles.btn} onClick={()=>setState(true)}>
      <PointerFinger />
  
    </button>

    
    <div className={`${styles.popup} ${state ? styles.active : ''}`}>
 
        {children}

        <button className={styles.close} onClick={()=>setState(false)}>Close</button>
      </div>
 </>
  )
}
