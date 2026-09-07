import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { CreateTrip } from './pages/CreateTrip'
import { Dashboard } from './pages/Dashboard'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [noticeVisible, setNoticeVisible] = useState(false)
  const navigate = (to: '/' | '/trips/new') => { window.history.pushState({}, '', to); setPath(to) }
  useEffect(() => { const onPopState = () => setPath(window.location.pathname); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState) }, [])
  const handleCreated = () => { setNoticeVisible(true); navigate('/') }
  return <div className="app-shell"><Header onStartTrip={() => navigate('/trips/new')} onDashboard={() => navigate('/')} isDashboard={path === '/'} />{path === '/trips/new' ? <CreateTrip onBack={() => navigate('/')} onCreated={handleCreated} /> : <Dashboard onStartTrip={() => navigate('/trips/new')} />}{noticeVisible && <div className="toast" role="status"><span className="toast-icon" aria-hidden="true">✦</span>Trip created successfully!<button type="button" className="toast-dismiss" onClick={() => setNoticeVisible(false)} aria-label="Dismiss message">×</button></div>}</div>
}
export default App
