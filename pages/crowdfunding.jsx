import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Crowdfunding() {
  const router = useRouter()
  useEffect(() => { router.replace('/blog/crowdfunding-immobilier-homunity-avis') }, [])
  return null
}
