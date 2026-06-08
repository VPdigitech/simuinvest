import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Comparateur() {
  const router = useRouter()
  useEffect(() => { router.replace('/#quiz') }, [])
  return null
}
