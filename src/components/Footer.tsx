import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {portfolio.name}</p>
    </footer>
  )
}
