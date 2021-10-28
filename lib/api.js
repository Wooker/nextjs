const API_URL = 'https://pariki.kz/graphql'

export async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    if (API_URL) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    }

    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()
    if (json.errors) {
      console.error(JSON.stringify(json.errors, null, 2))
      throw new Error('Failed to fetch API')
    }
    return json.data
}

export async function getPosts(){
    const data = await fetchAPI(
		`query MyQuery {
		  posts {
			nodes {
			  id
			  title
			}
		  }
		}
      `);
    return data?.posts?.nodes;
}

export async function getProducts(size){
    const data = await fetchAPI(
		`query MyQuery {
		  products(first: ${size}) {
			edges {
			  node {
				... on SimpleProduct {
				  databaseId
				  id
				  sku
				  name
					image {
					  guid
					}
				}
			  }
			}
		  }
		}
      `,
        {
          variables: {},
        }
      );
    return data?.products?.edges;
}

export async function getProduct(id){
    const data = await fetchAPI(`
		query MyQuery {
		  post(id: "${id}") {
			title
		  }
		}
    `,);

    return data?.product;
}
