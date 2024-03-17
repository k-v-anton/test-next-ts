import { One } from '@/app/svg/secondPopupSvg/One/One'
import { Three } from '@/app/svg/secondPopupSvg/Three/Three'
import { Two } from '@/app/svg/secondPopupSvg/Two/Two'
import { Card } from './Card/Card'
import styles from './PopupContentSecond.module.scss'

export const PopupContentSecond = () => {
  return (
    <div className={styles.popupConteon}>
      <div className={styles.description}>
        <p>
          <b>
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
            77% пациентов1.
          </b>
        </p>
        <p>
          В течение 5 лет после первого тяжёлого обострения в живых остаются
          только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым
          при сердечной недостаточности, инфаркте миокарда и некоторых
          злокачественных опухолях.
        </p>
      </div>
      <h2 className={styles.titleGrid}>Пятилетняя выживаемость пациентов</h2>

      <div className={styles.grid}>
        <Card>
          <One />
          <p className={styles.procent}>45,5%</p>
          <p className={styles.text}>
            пациентов с <b>сердечной недостаточностью1</b>
          </p>
          <p className={styles.subText}>
            Популяционное когортное исследование (N=385)
          </p>
        </Card>
        <Card>
          <Two />
          <p className={styles.procent}>55,3%</p>
          <p className={styles.text}>
            пациентов с <bdi>инфарктом миокарда1</bdi>
          </p>
          <p className={styles.subText}>
            Апостериорный анализ когортного исследования (N=2887)
          </p>
        </Card>
        <Card>
          <Three />
          <p className={styles.procent}>50,5%</p>
          <p className={styles.text}>
            пациентов с <b>раком мочевого пузыря</b>
          </p>
          <p className={styles.subText}>
            Исследование Национальной статистической службы (N=42642)
          </p>
        </Card>
      </div>
    </div>
  )
}
