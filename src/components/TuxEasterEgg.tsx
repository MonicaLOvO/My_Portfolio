import { useEffect, useRef, useState } from 'react'

const catIconSrc = `${import.meta.env.BASE_URL}cat-icon.png`
const photoUrl = `${import.meta.env.BASE_URL}tux.png`

export default function TuxEasterEgg() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="tux-egg" ref={rootRef}>
      <button
        type="button"
        className={`tux-egg-trigger${open ? ' is-open' : ''}`}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Hide Tux' : 'Meet Tux'}
        aria-expanded={open}
        title="?"
      >
        <img
          src={catIconSrc}
          alt=""
          className="tux-egg-icon"
          width={28}
          height={28}
          draggable={false}
        />
      </button>

      {open && (
        <div className="tux-egg-card" role="dialog" aria-label="Meet Tux">
          <img src={photoUrl} alt="Tux, Monica's black and white tuxedo cat" />
          <div className="tux-egg-copy">
            <p className="tux-egg-name">Tux</p>
            <p className="tux-egg-caption">
            My little sweet guy, and a mix of bugs.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
