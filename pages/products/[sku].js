import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { useEntry } from '../../lib/swr-hooks'

export default function Product() {
	const router = useRouter()
	const sku = router.query.sku?.toString()
	const { data } = useEntry(sku)

	return (
		<Layout home>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Layout>
	)
}
