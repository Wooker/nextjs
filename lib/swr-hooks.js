import useSWR from 'swr'

async function fetcher(url) {
  return window.fetch(url).then((res) => res.json())
}

export function useEntries(quantity = 10) {
	const { data, error } = useSWR(`/api/get-entries?quantity=${quantity}`, fetcher)

	return {
		entries: data,
		isLoading: !error && !data,
		isError: error,
	}
}

export function useEntry(sku) {
	return useSWR(`/api/get-entry?sku=${sku}`, fetcher)
}
