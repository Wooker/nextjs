import { NextApiHandler } from 'next'
import { fetchAPI } from '../../lib/api'

const handler: NextApiHandler = async (req, res) => {
  const { sku } = req.query
  try {
	  /*
    if (!id) {
      return res.status(400).json({ message: '`id` required' })
    }
    if (typeof (id) !== 'string') {
      return res.status(400).json({ message: '`id` must be a string' })
    }
	*/
    const data = await fetchAPI(`
		query MyQuery {
		  product(id: "${sku}", idType: SKU) {
			id
			sku
			image {
			  link
			}
			featured
			productCategories {
			  edges {
				node {
				  name
				}
			  }
			}
			productTags {
			  edges {
				node {
				  name
				}
			  }
			}
			globalAttributes {
			  edges {
				node {
				  name
				  terms {
					edges {
					  node {
						name
					  }
					}
				  }
				}
			  }
			}
		  }
		}
    `,)

    return res.json(data)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
