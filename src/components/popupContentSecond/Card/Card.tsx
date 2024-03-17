import styles from './Card.module.scss'

export const Card = ({ children }: { children: JSX.Element[] }) => {
  return <div className={styles.card}>{children}</div>
}
