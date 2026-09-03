import { useEffect, useState } from 'react'

type TypewriterProps = {
  text: string
  speed?: number
  className?: string
}

export default function Typewriter({
  text,
  speed = 58,
  className = '',
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      setDisplayed(text)
      setDone(true)
      return
    }

    setDisplayed('')
    setDone(false)

    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setDisplayed(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(timer)
        setDone(true)
      }
    }, speed)

    return () => window.clearInterval(timer)
  }, [text, speed])

  return (
    <span className={`typewriter${className ? ` ${className}` : ''}`}>
      {displayed}
      {!done && <span className="typewriter-cursor" aria-hidden="true" />}
    </span>
  )
}
