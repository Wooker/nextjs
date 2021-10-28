import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {getPosts} from "../lib/api";
import pic from '../public/ne_bolei.jpg'

export async function getServerSideProps(ctx){
	let posts = await getPosts();
  return {
    props:{
		posts
    }
  }
}

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home({posts}) {
  return (
      <div className={styles.container}>
        <Head>
          <title>CMS blog</title>
          <meta name="description" content="CMS Wordpress with Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
			<h1>Ширин</h1>
			<Image
				src={pic}
				alt=''
			/>
	    <p>Posts:</p>
		<ul>
        {
          posts.map((post,index) => (
		  <li key={index}>

              <Link href={`/posts/${post.id}`}>
              <a style={{color:'blue'}}>{post.title}</a>
              </Link>

		</li>
          ))
          }
	</ul>
        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
	)
}
