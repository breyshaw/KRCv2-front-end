import styles from './Landing.module.css'
import logo from './krc_logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'friend!!'}</h1>
      <img className={styles.logo} src={logo} alt="" />
      <p className={styles.p}>In early 2020, I got the idea to try my hand at custom crafts. I wanted to be able to showcase my different artistic abilities through custom apparel! Since, Katie Rayne Creations has grown into a small, successful business. Not only do I create custom tees, I now offer other items such as tumblers, keychains, bows, blankets, and other accessories! So far, the continued growth and success of KRC has given me the opportunity to make it my full time job, and has allowed me to stay home with my two children. As always, thank you for supporting my small business!</p>
    </main>
  )
}

export default Landing
