export const fetcher = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error fetching data')
  }

  const data = await response.json()

  const totalItems = Number(response.headers.get('X-Total-Count')) || data.length

  return {
    data,
    totalItems,
  }
}
