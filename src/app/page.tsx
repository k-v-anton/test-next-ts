import { Block } from '@/components/block/Block'
import { ItemFirstBlock } from '@/components/itemFirstBlock/ItemFirstBlock'
import styles from './page.module.scss'

import { CardContainer } from '@/components/cardContainer/CardContainer'
import { CardInhalate } from '@/components/cardInhalait/CardInhalate'
import { Arrow } from './svg/Arrow/Arrow'
import { User } from './svg/User/User'
import { HeaderLines } from './svg/headerLines/HeaderLines'
import { Ship } from './svg/Ship/Ship'

export default function Home() {
  type FirstBlockElementType = {
    id: number
    firstTitle: string
    secondTitle: string
    body: string
    icon: () => JSX.Element
    reverse: boolean
  }

  const dataFirstBlock: FirstBlockElementType[] = [
    {
      id: 1,
      firstTitle: 'ХОБЛ болеют',
      secondTitle: 'преимущественно мужчины?',
      body: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...',
      icon: User,
      reverse: false,
    },
    {
      id: 2,
      firstTitle: 'не наличие заболевания, а обострения?',
      secondTitle: 'Опасно',
      body: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...',
      icon: Arrow,
      reverse: true,
    },
  ]

  const dataSecondBlock = {
    firstLine: [
      {
        id: 1,
        title: 'Ингаляционный',
        subtitle: 'антихолинергик',
        text: 'Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1',
      },
      {
        id: 2,
        title: 'Ингаляционный',
        subtitle: 'β2-агонист',
        text: 'Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции',
      },
      {
        id: 3,
        title: 'Ингаляционный',
        subtitle: 'глюкокортикостероид (ИГКС)',
        text: 'Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей',
      },
    ],
    secondLine: [
      'Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга1.',
      'Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)1.',
    ],
  }

  const data = [
    {
      id: 1,
      blockTitle: 'ХОБЛ: мифы и реальность',
    },
    {
      id: 2,
      blockTitle: 'Терапия ХОБЛ: что в фокусе?',
    },
  ]

  return (
    <main className={styles.main}>
      <Ship className={'first'}/>
      <Ship className={'second'}/>

      <HeaderLines/>
      <div className={styles.container}>
        {data.map((block) => (
          <>
            {block.id === 1 && (
              <Block key={block.id} title={block.blockTitle}>
                {dataFirstBlock.map((item) => (
                  <ItemFirstBlock
                    key={item.id}
                    iconItem={item.icon}
                    firstTitle={item.firstTitle}
                    secondTitle={item.secondTitle}
                    body={item.body}
                    reverse={item.reverse}
                    id={item.id}
                  />
                ))}
              </Block>
            )}
            {block.id === 2 && (
              <Block key={block.id} title={block.blockTitle}>
                <div className={styles.text1}>
                  Даже 1 среднетяжелое обострение — сигнал к увеличению объема
                  терапии
                </div>

                <div className={styles.text2}>
                  Приоритетные направления фармакотерапевтической стратегии при
                  ХОБЛ1:
                </div>

               <div className={styles.grid}>
                 <div className={styles.wrapper}>
                    <div className={styles.lineOne}>
                      <div className={`${styles.arrow} ${styles.first}`}></div>
                      <div className={`${styles.arrow} ${styles.second}`}></div>
  
                      {dataSecondBlock.firstLine.map((card) => (
                        <CardInhalate
                          key={card.id}
                          id={card.id}
                          title={card.title}
                          subTitle={card.subtitle}
                          text={card.text}
                        />
                      ))}
                    </div>
                    <div className={styles.lineTwo}>
                      {dataSecondBlock.secondLine.map((card, index) => (
                        <CardContainer key={index}>
                          <p className={styles.text}>{card}</p>
                        </CardContainer>
                      ))}
                    </div>
                 </div>
               </div>
              </Block>
            )}
          </>
        ))}
      </div>
    </main>
  )
}
