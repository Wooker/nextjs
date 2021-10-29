import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import Entries from '../components/entries'
import {getPosts, getProducts} from "../lib/api"
import { useEntries } from '../lib/swr-hooks'

export default function Home() {
	const prods = useEntries(25)
	
	return (
		<>
		<Layout home>
			{prods.isLoading ? (
				<>
				<div className="d-flex justify-content-center align-items-center">
					<div className="spinner-grow text-warning" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-warning" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-warning" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
				</>
			) : (
				<>
				</>
			)}
		</Layout>
		</>
	)
}
