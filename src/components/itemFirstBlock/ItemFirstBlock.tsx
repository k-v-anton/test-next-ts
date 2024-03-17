import { Button } from '../Button/Button'
import { PopupContentFirst } from '../opupContentFirst/PopupContentFirst'
import { PopupContentSecond } from '../popupContentSecond/PopupContentSecond'
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
  id: number
}

export const ItemFirstBlock = (props: PropsType) => {
  const { id, iconItem: Icon, firstTitle, secondTitle, body, reverse } = props
  return (
    <div className={styles.item}>
      <IconContainer>
        <Icon />
      </IconContainer>

      <Title title={firstTitle} subtitle={secondTitle} reverse={reverse} />

      <Body text={body} />
      <Button>
        <> {id === 1 && <PopupContentFirst />}</>
        <> {id === 2 && <PopupContentSecond />}</>
      </Button>
    </div>
  )
}
