import styles from './Landing.module.css'
import logo from './krc_logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <div className='card'>
        <h1 className='text-center'>Welcome, {user ? user.name + "!!" : 'friend!'}</h1>
        <div>
          <div className={styles.container}>
            <a className='text-center' href="/items">
              <button className='btn btn-primary btn-lg mb-0'>
                Click here to start browsing
              </button>
            </a>
          </div>
          <p className={styles.p}>
            About Me:
            <br />
            In early 2020, I got the idea to try my hand at custom crafts. I wanted to be able to showcase my different artistic abilities through custom apparel! Since, Katie Rayne Creations has grown into a small, successful business. Not only do I create custom tees, I now offer other items such as tumblers, keychains, bows, blankets, and other accessories! So far, the continued growth and success of KRC has given me the opportunity to make it my full time job, and has allowed me to stay home with my two children. <br /> As always, thank you for supporting my small business!</p>
          <center>
            <div className="fb-page" data-href="https://m.facebook.com/KatieRayneCreations" data-tabs="timeline" data-width="540" data-height="360" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://m.facebook.com/KatieRayneCreations" className="fb-xfbml-parse-ignore"><a href="https://m.facebook.com/KatieRayneCreations">Katie Rayne Creations</a></blockquote></div>
          </center>
          {user ? '' :
            <h2 className='text-center'>Want to leave a review on my items? Create an account here! <br /> <a className="btn btn-primary" aria-current="page" href="/signup">Signup</a></h2>
          }
        </div>
      </div>
    </main>
  )
}

export default Landing
