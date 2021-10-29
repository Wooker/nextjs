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
			alt=''
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
<article class="my-3" id="carousel">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Carousel</h3>
        <a class="d-flex align-items-center" href="/docs/5.1/components/carousel/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators align-items-center">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </article>

      <main>{children}</main>

      {!home && (
        <div classNameName={styles.backToHome}>
          <Link href="/">
            ← Back to home
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
				+77085793185
			</Link>
		  </li>
		  <li className="ms-3"><a className="text-muted" href="#"></a></li>
		</ul>
	  </footer>
	</div>
	</>
  )
}
