import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { mutate } from 'swr'
import utilStyles from '../../../styles/utils.module.css'

export function Entry({ sku, title, image, className='' }) {
  const [deleting, setDeleting] = useState(false)

  async function deleteEntry() {
    setDeleting(true)
    let res = await fetch(`/api/delete-entry?sku=${sku}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-entries')
    setDeleting(false)
  }
  return (
	  <>
		<div className="col">
		  <div className="card shadow-md">
			<Link href={`/products/${sku}`}>
				<Image
					className="bd-placeholder-img card-img-top"
					priority
					src={image}
					width={230}
					height={238}
					objectPosition='center'
				/>
			</Link>
			<div className="card-body">
			  <p className="card-text h4">
				<Link href={`/products/${sku}`}>
					<a className={utilStyles.title}>{title}</a>
				</Link>
				</p>
			  <div className="d-flex justify-content-center align-items-center">
				<div className="btn-group">
				  <button type="button" className="btn btn-lg btn-outline-primary">В корзину</button>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		</>
  )
}

export function EntryView({ sku }) {
}
