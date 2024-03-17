'use client'

import { PointerFinger } from '@/app/svg/PointerFinger'
import { useEffect, useState } from 'react'
import styles from './Button.module.scss'

export const Button = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    state ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
  }, [state])

  return (
    <>
      <button className={styles.btn} onClick={() => setState(true)}>
        <PointerFinger />
      </button>

      <div className={`${styles.popup} ${state ? styles.active : ''}`}>
        <div className={styles.popupConteon}>{children}</div>

        <button className={styles.close} onClick={() => setState(false)}>
          Close
        </button>
      </div>
    </>
  )
}
