declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    __gaInitialized?: boolean
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

function ensureGtag() {
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      window.dataLayer.push(args)
    })
}

export function initGoogleAnalytics() {
  if (typeof window === 'undefined') {
    return
  }

  if (!GA_MEASUREMENT_ID || window.__gaInitialized) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  ensureGtag()
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: `${window.location.pathname}${window.location.search}`,
  })

  window.__gaInitialized = true
}
