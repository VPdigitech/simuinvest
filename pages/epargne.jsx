import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Epargne() {
  const router = useRouter()
  useEffect(() => { router.replace('/blog/meilleur-livret-epargne-2026') }, [])
  return null
}
