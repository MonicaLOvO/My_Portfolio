import { useEffect } from 'react'

function resetCard(card: HTMLElement) {
  card.classList.remove('is-glow-active')
  card.style.setProperty('--glow-x', '-999px')
  card.style.setProperty('--glow-y', '-999px')
}

export default function CardGlow() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!finePointer || reducedMotion) return

    let activeCard: HTMLElement | null = null

    function onMove(event: MouseEvent) {
      const card = (event.target as Element | null)?.closest(
        '.card',
      ) as HTMLElement | null

      if (activeCard && activeCard !== card) {
        resetCard(activeCard)
      }

      if (!card) {
        if (activeCard) resetCard(activeCard)
        activeCard = null
        return
      }

      const rect = card.getBoundingClientRect()
      card.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
      card.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
      card.classList.add('is-glow-active')
      activeCard = card
    }

    document.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (activeCard) resetCard(activeCard)
    }
  }, [])

  return null
}
