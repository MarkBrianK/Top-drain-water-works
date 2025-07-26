import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const loadingTimer = useRef(null)
  const fallbackTimer = useRef(null)
  const minDelay = 200 // Further reduced for faster loading

  // Only show loading spinner if router is ready
  const shouldShowLoading = loading && router.isReady

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
      // Clear any existing timers
      if (loadingTimer.current) clearTimeout(loadingTimer.current)
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
      // Set a fallback timer to ensure loading doesn't get stuck
      fallbackTimer.current = setTimeout(() => {
        setLoading(false)
      }, 2000) // Reduced to 2 seconds
    }

    const handleComplete = () => {
      // Clear fallback timer
      if (fallbackTimer.current) {
        clearTimeout(fallbackTimer.current)
        fallbackTimer.current = null
      }
      // Clear existing loading timer
      if (loadingTimer.current) clearTimeout(loadingTimer.current)
      // Set minimum delay timer
      loadingTimer.current = setTimeout(() => {
        setLoading(false)
        loadingTimer.current = null
      }, minDelay)
    }

    const handleError = () => {
      setLoading(false)
      if (loadingTimer.current) clearTimeout(loadingTimer.current)
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
    }

    // Add event listeners
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleError)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleError)
      if (loadingTimer.current) clearTimeout(loadingTimer.current)
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
    }
  }, [router])

  // Force stop loading if router becomes ready and we're still loading
  useEffect(() => {
    if (router.isReady && loading) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [router.isReady, loading])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {shouldShowLoading ? <LoadingSpinner /> : <Component {...pageProps} />}
      </Layout>
    </>
  )
}

export default MyApp
