import { First } from '@/app/svg/First/First'
import styles from './Block.module.scss'
import { TitleBlock } from '../TitleBlock/TitleBlock'

type PropsType = {
  children: JSX.Element[] | JSX.Element
  title: string
}

export const Block = (props: PropsType) => {
  const { children, title } = props
  return (
    <section className={styles.sectionContainer}>
   
      <TitleBlock title={title}/>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
