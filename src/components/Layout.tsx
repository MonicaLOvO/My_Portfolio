import { Outlet } from 'react-router-dom'
import CardGlow from './CardGlow'
import Footer from './Footer'
import MouseTrail from './MouseTrail'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="site">
      <div className="bg-glow-layer" aria-hidden="true" />
      <div className="bg-dots-layer" aria-hidden="true" />
      <MouseTrail />
      <CardGlow />
      <Nav />
      <div className="site-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
