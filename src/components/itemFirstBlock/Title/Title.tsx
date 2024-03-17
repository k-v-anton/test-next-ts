import { TitleArrowBackground } from '@/app/svg/TitleArrowBackground/TitleArrowBackground'
import styles from './Title.module.scss'

export const Title = ({
  title,
  subtitle,
  reverse,
}: {
  title: string
  subtitle: string
  reverse: boolean
}) => {
  return (
    <div className={styles.titleContainer}>
      <TitleArrowBackground />
      <h3 className={styles.title}>
        {reverse && <span>{subtitle} </span>}
        {title}
        {!reverse && <span> {subtitle}</span>}
      </h3>
    </div>
  )
}
