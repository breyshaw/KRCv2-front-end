import styles from './Landing.module.css'
import logo from './krc_logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <div className='card'>
        <h1 className='text-center'>Welcome, {user ? user.name + "!!" : 'friend!!'}</h1>
        <p className={styles.p}>In early 2020, I got the idea to try my hand at custom crafts. I wanted to be able to showcase my different artistic abilities through custom apparel! Since, Katie Rayne Creations has grown into a small, successful business. Not only do I create custom tees, I now offer other items such as tumblers, keychains, bows, blankets, and other accessories! So far, the continued growth and success of KRC has given me the opportunity to make it my full time job, and has allowed me to stay home with my two children. As always, thank you for supporting my small business!</p>
        <h2 className='text-center'>Want to leave a review on my items? Create an account here! <br /> <a className="btn btn-primary" aria-current="page" href="/signup">Signup</a></h2>
      </div>
    </main>
  )
}

export default Landing
