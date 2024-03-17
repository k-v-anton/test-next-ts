import { PointerFinger } from '@/app/svg/PointerFinger'
import { Body } from './Body/Body'
import { IconContainer } from './IconContainer/IconContainer'
import styles from './ItemFirstBlock.module.scss'
import { Title } from './Title/Title'

type PropsType = {
  iconItem: () => JSX.Element
  firstTitle: string
  secondTitle: string
  body: string
  reverse: boolean
}

export const ItemFirstBlock = (props: PropsType) => {
  const { iconItem: Icon, firstTitle, secondTitle, body, reverse } = props
  return (
    <div className={styles.item}>
      <IconContainer>
        <Icon />
      </IconContainer>

      <Title title={firstTitle} subtitle={secondTitle} reverse={reverse} />

      <Body text={body} />

      <button className={styles.btn}>
        <PointerFinger />
      </button>
    </div>
  )
}
