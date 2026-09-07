import { useState } from 'react'
import { Button } from '../ui/Button'
import { Logo } from './Logo'

type HeaderProps = { onStartTrip: () => void }

export function Header({ onStartTrip }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span /> <span />
        </button>
        <div className={`header-navigation ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          <nav aria-label="Primary navigation">
            <a className="nav-link is-active" href="#main-content" aria-current="page">Dashboard</a>
            <a className="nav-link" href="#active-trips-heading">Trips</a>
          </nav>
          <div className="header-actions">
            <Button className="header-trip-button" onClick={onStartTrip} icon="plus">New trip</Button>
            <button className="profile-button" type="button" aria-label="Open profile menu">
              <span aria-hidden="true">TC</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
