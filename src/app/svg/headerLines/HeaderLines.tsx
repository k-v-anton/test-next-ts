import styles from './HeaderLines.module.scss'

export const HeaderLines = () => {
  return (
    <div className={styles.header}>
      <svg
        className={`${styles.svg} ${styles.one}`}
        width='1247'
        height='78'
        viewBox='0 0 1247 78'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M732.913 53.5282C465 0 82.3517 59.5426 0 66.7599V0H1247C1186.4 92.0203 917.46 90.4002 732.913 53.5282Z'
          fill='url(#paint0_linear_0_5956)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_0_5956'
            x1='348.013'
            y1='33.9456'
            x2='1254.76'
            y2='33.9456'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FBFDFF' />
            <stop offset='1' stop-color='#D8EFFF' />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={`${styles.svg} ${styles.two}`}
        width='940'
        height='69'
        viewBox='0 0 940 69'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M403 49.2851C292.477 41.3522 83.036 23.7704 0.5 32.27L38.5 0H939.5C878.766 108.37 541.153 59.2014 403 49.2851Z'
          fill='url(#paint0_linear_0_5955)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_0_5955'
            x1='38.5'
            y1='31.94'
            x2='939.5'
            y2='31.94'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.550527' stop-color='#FDD966' />
            <stop offset='1' stop-color='#BCD77E' />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={`${styles.svg} ${styles.three}`}
        width='1040'
        height='50'
        viewBox='0 0 1040 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M439.795 28.1798C318.415 20.2465 91.1442 -7.99995 0.5 0.5L49.9874 -17H1039.5C972.799 91.3744 591.521 38.0964 439.795 28.1798Z'
          fill='url(#paint0_linear_0_5954)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_0_5954'
            x1='49.9874'
            y1='14.9412'
            x2='1039.5'
            y2='14.9412'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.383678' stop-color='#BCD77E' />
            <stop offset='0.996656' stop-color='#FDD966' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
