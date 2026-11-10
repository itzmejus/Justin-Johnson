import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { isGerman } from './i18n/locale'
import { setGermanContent } from './i18n/germanContentStore'

// The German long-form content lives in its own chunk, fetched only on /de pages. It must be
// registered before the app modules are evaluated, because the data modules read it on load.
async function boot() {
  if (isGerman) {
    const { germanContent } = await import('./i18n/germanContent')
    setGermanContent(germanContent)
  }
  const { default: App } = await import('./App.tsx')

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

boot()
