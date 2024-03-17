import styles from './Droplet.module.scss'

export const Droplet = () => {
  return (
    <svg
      className={styles.svg}
      viewBox='0 0 80 81'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 0.5H40C62.0914 0.5 80 18.4086 80 40.5V40.5C80 62.5914 62.0914 80.5 40 80.5V80.5C17.9086 80.5 0 62.5914 0 40.5V0.5Z'
        fill='url(#paint0_linear_0_28)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_0_28'
          x1='-1.42492e-06'
          y1='33'
          x2='80'
          y2='33'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FDD966' />
          <stop offset='0.685406' stop-color='#BCD77E' />
        </linearGradient>
      </defs>
    </svg>
  )
}
