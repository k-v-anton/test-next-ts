import styles from './CardContainer.module.scss'

type PropsType = {
  children: JSX.Element[] | JSX.Element
}
export const CardContainer = (props: PropsType) => {
  const { children } = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
