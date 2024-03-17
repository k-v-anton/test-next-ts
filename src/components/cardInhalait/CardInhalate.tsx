import { Inhaler } from '@/app/svg/Inhaler/Inhaler'
import styles from './CardInhalate.module.scss'
import { CardContainer } from '../cardContainer/CardContainer'

type PropsType = {
  title: string
  subTitle: string
  text: string
  id: number
}

export const CardInhalate = (props: PropsType) => {
  const { id, title, subTitle, text } = props
  return (
   <CardContainer>
          <div className={styles.iconContainer}>
            <Inhaler />
            <p className={styles.iconNumber}>{id}</p>
          </div>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subTitle}</h3>
          </div>
          <p className={styles.text}>{text}</p>
   </CardContainer>
  )
}
