import styles from './Landing.module.css'
import logo from './krc_logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <img className={styles.logo} src={logo} alt="" />
    </main>
  )
}

export default Landing
