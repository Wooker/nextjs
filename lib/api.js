const API_URL = 'http://cx55944-wordpress-3.tw1.ru/graphql'

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
      console.error(json.errors)
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
      `,
        {
          variables: {},
        }
      );
    return data?.posts?.nodes;
}

export async function getSinglePost(id){
    const data = await fetchAPI(`
		query MyQuery {
		  post(id: "cG9zdDoxMA==") {
			title
		  }
		}
    `,{id});

    return data?.post;
}
