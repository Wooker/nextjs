import { NextApiHandler } from 'next'
import { fetchAPI } from '../../lib/api'

const handler: NextApiHandler = async (req, res) => {
  const { quantity } = req.query

  try {
    const data = await fetchAPI(`
		query MyQuery {
		  products(first: ${quantity}) {
			edges {
			  node {
				... on SimpleProduct {
				  id
				  name
				  databaseId
				  sku
				  image {
					  guid
				  }
				}
			  }
			}
		  }
		}
      `);

    return res.json(data)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
