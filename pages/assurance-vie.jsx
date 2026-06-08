import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function AssuranceVie() {
  const router = useRouter()
  useEffect(() => { router.replace('/blog/meilleure-assurance-vie-2026') }, [])
  return null
}
