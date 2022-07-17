import Image from 'next/image'
import logo from '../../assets/logo.svg'
import styles from './header.module.scss'

export default function Header(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Image src={logo} />
    </div>
  )
}
