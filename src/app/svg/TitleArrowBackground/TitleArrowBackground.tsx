import styles from './TitleArrowBackground.module.scss'
export const TitleArrowBackground = () => {
  return (
    <svg
      className={styles.svg}
      viewBox='0 0 297 116'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M254.139 115.5H0V1H254.139L295 50.8145L254.139 115.5Z'
        fill='url(#paint0_linear_0_19)'
      />
      <path
        d='M0 114.5H254.139L295 50.5L254.139 1'
        stroke='url(#paint1_linear_0_19)'
        strokeWidth='3'
      />
      <defs>
        <linearGradient
          id='paint0_linear_0_19'
          x1='295'
          y1='50.7293'
          x2='2.95041e-07'
          y2='50.7293'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D8EFFF' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_0_19'
          x1='295'
          y1='1.00001'
          x2='-10.2769'
          y2='66.874'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#01457A' />
          <stop offset='0.432292' stopColor='#43A7C7' />
          <stop offset='0.744792' stopColor='#BCD77E' />
          <stop offset='1' stopColor='#BCD77E' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}
