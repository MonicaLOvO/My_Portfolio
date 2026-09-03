import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

function runThemeTransition(next: Theme, onDone: () => void) {
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  const commit = () => {
    flushSync(() => onDone())
    applyTheme(next)
  }

  if (reducedMotion || !('startViewTransition' in document)) {
    document.documentElement.classList.add('theme-transitioning')
    commit()
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
    }, 480)
    return
  }

  document.startViewTransition(commit)
}

function LightBulbIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className="theme-toggle-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path className="theme-bulb-fill" d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z" />
      <path
        className="theme-bulb-outline"
        d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z"
        fill="none"
      />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      {filled && (
        <>
          <path className="theme-bulb-ray" d="M12 0.5v1.5" />
          <path className="theme-bulb-ray" d="M4.2 4.2l1.1 1.1" />
          <path className="theme-bulb-ray" d="M19.8 4.2l-1.1 1.1" />
        </>
      )}
    </svg>
  )
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [popping, setPopping] = useState(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setPopping(true)
    window.setTimeout(() => setPopping(false), 450)
    runThemeTransition(next, () => setTheme(next))
  }

  const nextLabel = theme === 'dark' ? 'light' : 'dark'
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className={`theme-toggle${isLight ? ' is-on' : ''}${popping ? ' is-popping' : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode`}
    >
      <LightBulbIcon filled={isLight} />
    </button>
  )
}
