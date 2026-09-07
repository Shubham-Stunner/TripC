import type { NewTrip, Trip } from '../types/trip'
const TRIPS_STORAGE_KEY = 'tripc_trips'
function getStorage() { try { return window.localStorage } catch { return null } }
function createTripId() { return typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `trip_${Date.now()}_${Math.random().toString(16).slice(2)}` }
export function readTrips(): Trip[] { const storage = getStorage(); if (!storage) return []; try { const saved: unknown = JSON.parse(storage.getItem(TRIPS_STORAGE_KEY) ?? '[]'); return Array.isArray(saved) ? saved as Trip[] : [] } catch { return [] } }
export function saveTrips(trips: Trip[]) { const storage = getStorage(); if (!storage) throw new Error('Trip storage is unavailable.'); try { storage.setItem(TRIPS_STORAGE_KEY, JSON.stringify(trips)) } catch { throw new Error('We could not save this trip on this device. Please try again.') } }
export function createTrip(details: NewTrip): Trip { const trip: Trip = { ...details, id: createTripId(), createdAt: new Date().toISOString(), status: 'active' }; saveTrips([...readTrips(), trip]); return trip }
