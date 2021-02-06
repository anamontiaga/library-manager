const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
  "X-AUTH-TOKEN": "LIBRARIFY"
}

export default async function sendRequest({ url, method, body }) {
  const response = await fetch(url, {
    method,
    headers,
    body,
  })
  if (!response.ok) {
    throw new Error(`Requested failed with ${response.status}`)
  }
  const json = await response.json()
  return json
}
