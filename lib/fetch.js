import fetch from 'isomorphic-unfetch'

export default async function Fetch(...args) {
  const res = await fetch(...args)
  return res.json()
}