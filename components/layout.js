import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import profile from '../public/profile.jpeg'
import styles from './layout.module.css'

const name = 'Парики Алматы'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}) {
  return (
	  <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

	   <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
		</Head>

	<div className='container'>
		<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
			<Image
			src={profile}
			width={50}
			height={50}
			/>
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
				<span className="fs-3">{name}</span>
			</a>

			<ul className="nav nav-pills">
				<li className="nav-item"><a href="/" className="nav-link active h5">Каталог</a></li>
				<li className="nav-item"><a href="#" className="nav-link h5">FAQ</a></li>
				<li className="nav-item"><a href="#" className="nav-link h5">О нас</a></li>
			</ul>
		</header>

      <main>{children}</main>

      {!home && (
        <div classNameName={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

	<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
		<div className="col-md-4 d-flex align-items-center">
		  <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
		  </a>
		  <span className="text-muted">© 2021 Парики Алматы</span>
		</div>

		<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
		  <li className="ms-3"><a className="text-muted" href="#"></a></li>
		  <li className="ms-3">
			<Link href='https://api.whatsapp.com/send/?phone=77085793185' >
				<a>+77085793185</a>
			</Link>
		  </li>
		  <li className="ms-3"><a className="text-muted" href="#"></a></li>
		</ul>
	  </footer>
	</div>
	</>
  )
}
