import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="persons" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
        <title>Person List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home - personlist</h1>
        <p className={styles.text}>😤 
        Being a list person is great! There are so many kinds of lists, that you can create a list for everything. Here's just a few ways that lists are helping me everythe day the Lord hath made, let us be glad and rejoice in it!  </p>
        <p className={styles.text}> love lists. As I started to use list, it’s eye-opening just how much you can achieve when you’re working from a list, and that’s important to me. My time taking classes on-line, working on projects really taught me the value of organisation, and one of the methods I use (and will continue to use) is lists.Using lists has a number of advantages. You can easily see what’s coming up, what needs immediate attention, and what you’ve been putting off doing. If you save your lists, it’s also a nice record of what you’ve achieved. Being able to see how much I’ve done can really inspire me to do just a little more. Or helps to ease the anxiety that I’ve not done enough.</p>
        <p>This is a person list.</p>
        <Link href="/persons">
        <a className={styles.btn}>See Person Listing</a>
        </Link>
      </div>
    </>
  )
}
