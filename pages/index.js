import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {getPosts} from "../lib/api";

export async function getServerSideProps(ctx){
	let posts = await getPosts();
  return {
    props:{
		posts
    }
  }
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
        {
          posts.map((post,index) => (
            <div key={index}>

              <Link href={`/posts/${post.id}`}>
              <a style={{color:'blue'}}>{post.title}</a>
              </Link>

            </div>
          ))
          }
        </main>

        <footer className={styles.footer}>
          <p>Posts</p>
        </footer>
      </div>
	)
}
