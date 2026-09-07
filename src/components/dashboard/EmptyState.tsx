import { Button } from '../ui/Button'

type EmptyStateProps = { onStartTrip: () => void }

export function EmptyState({ onStartTrip }: EmptyStateProps) {
  return <div className="empty-state"><div className="empty-illustration" aria-hidden="true"><div className="sun" /><svg viewBox="0 0 260 130" fill="none"><path d="M16 103c22-17 39-22 61-18 22 3 29-9 50-27 18-16 37-18 53-8 15 9 24 1 36-9 9-8 18-11 30-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M16 113c31-13 61-14 87 0 21 12 44 11 67-3 25-15 47-9 76 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".45" /><path d="M87 87c8-17 18-28 31-36 13 9 22 20 29 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="m134 66 7-5 8 6M180 79l10-7 9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="m44 57 5 3 5-3M211 35l5 3 5-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></div><h3>Your adventures start here.</h3><p>Create your first trip and let TripC handle the math, so everyone can focus on the memories.</p><Button onClick={onStartTrip} icon="plus">Start your first trip</Button></div>
}
