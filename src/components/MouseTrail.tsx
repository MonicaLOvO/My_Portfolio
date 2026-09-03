import { useEffect, useRef, useState } from 'react'

type Point = { x: number; y: number }

const TRAIL_LENGTH = 14

function createTrail(): Point[] {
  return Array.from({ length: TRAIL_LENGTH }, () => ({ x: -9999, y: -9999 }))
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<Point[]>(createTrail)
  const [enabled, setEnabled] = useState(false)
  const target = useRef({ x: -9999, y: -9999 })
  const points = useRef<Point[]>(createTrail())

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!finePointer || reducedMotion) return

    setEnabled(true)

    function onMove(event: MouseEvent) {
      target.current = { x: event.clientX, y: event.clientY }
    }

    let frame = 0

    function tick() {
      const pts = points.current
      pts[0].x += (target.current.x - pts[0].x) * 0.32
      pts[0].y += (target.current.y - pts[0].y) * 0.32

      for (let i = 1; i < pts.length; i += 1) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * 0.38
        pts[i].y += (pts[i - 1].y - pts[i].y) * 0.38
      }

      setTrail(pts.map((point) => ({ ...point })))
      frame = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="mouse-trail" aria-hidden="true">
      {trail.map((point, index) => {
        const size = 10 - index * 0.45
        const opacity = Math.max(0.08, 0.55 - index * 0.038)

        return (
          <span
            key={index}
            className="mouse-trail-dot"
            style={{
              transform: `translate(${point.x}px, ${point.y}px)`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
            }}
          />
        )
      })}
    </div>
  )
}
