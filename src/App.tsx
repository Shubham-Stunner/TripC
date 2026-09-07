import { useState } from 'react'
import { EmptyState } from './components/dashboard/EmptyState'
import { Header } from './components/layout/Header'
import { Button } from './components/ui/Button'

function App() {
  const [noticeVisible, setNoticeVisible] = useState(false)

  const showTripNotice = () => {
    setNoticeVisible(true)
    window.setTimeout(() => setNoticeVisible(false), 3600)
  }

  return (
    <div className="app-shell">
      <Header onStartTrip={showTripNotice} />

      <main className="dashboard-content" id="main-content">
        <section className="welcome" aria-labelledby="welcome-heading">
          <div className="welcome-copy">
            <p className="eyebrow">YOUR TRIP SPACE</p>
            <h1 id="welcome-heading">Welcome back <span aria-hidden="true">👋</span></h1>
            <p className="welcome-description">Ready to plan your next adventure?</p>
          </div>
          <Button onClick={showTripNotice} icon="plus">Start a trip</Button>
        </section>

        <section className="trip-area" aria-labelledby="active-trips-heading">
          <div className="section-heading">
            <div>
              <h2 id="active-trips-heading">Active trips</h2>
              <p>All the details, without the spreadsheet.</p>
            </div>
            <span className="trip-count" aria-label="0 active trips">0 trips</span>
          </div>
          <EmptyState onStartTrip={showTripNotice} />
        </section>

        <aside className="how-it-works" aria-labelledby="how-it-works-heading">
          <div className="how-it-works-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3.5c3.5 0 6.5 2.5 6.5 6.1 0 4.3-4.3 8.1-6.5 10.1-2.2-2-6.5-5.8-6.5-10.1 0-3.6 3-6.1 6.5-6.1Z" />
              <circle cx="12" cy="9.6" r="2.1" />
            </svg>
          </div>
          <div>
            <h2 id="how-it-works-heading">Made for the moments between destinations.</h2>
            <p>Create a trip, add your group, and let TripC keep every shared cost clear and fair.</p>
          </div>
        </aside>
      </main>

      {noticeVisible && (
        <div className="toast" role="status">
          <span className="toast-icon" aria-hidden="true">✦</span>
          Trip creation is coming next. Your adventure starts here.
          <button type="button" className="toast-dismiss" onClick={() => setNoticeVisible(false)} aria-label="Dismiss message">×</button>
        </div>
      )}
    </div>
  )
}

export default App
