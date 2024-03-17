import React from 'react'
import styles from './PopupContentFirst.module.scss'
import { Diogramma } from '@/app/svg/Diogramma'

export const PopupContentFirst = () => {
  return (
    <div className={styles.popupConteon}>
    <div className={styles.description}>
      <p>
        В десятилетнем исследовании{' '}
        <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди
        пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено{' '}
        <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет
        количество женщин и мужчин.
      </p>

      <p>
        Такое эпидемиологическое распределение заболеваемости ХОБЛ может
        быть связано с тем, что дыхательные пути курящих женщин имеют
        более <b>высокий процент площади стенок</b>, но меньшую площадь
        просвета, внутренний диаметр и толщину дыхательных путей по
        сравнению с курящими мужчинами.
      </p>
    </div>
    <Diogramma />
  </div>
  )
}
