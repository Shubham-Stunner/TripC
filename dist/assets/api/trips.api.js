import { request, useMockApi } from './client';
import { mockDelay, trips, members } from './mockStore';
import { currentSession } from '../lib/session';
export const tripsApi = { list: () => useMockApi ? mockDelay(trips) : request('/api/trips'), get: (id) => useMockApi ? mockDelay(trips.find(t => t.id === id)) : request(`/api/trips/${id}`), create: async (input) => { if (!useMockApi)
        return request('/api/trips', { method: 'POST', body: JSON.stringify(input) }); const id = input.destination.toLowerCase().replace(/\W+/g, '-') + '-' + Date.now(); const trip = { id, destination: input.destination, country: input.country, startDate: input.startDate, endDate: input.endDate, status: 'active', createdBy: currentSession.user.id, memberIds: [] }; trips.unshift(trip); input.memberNames.forEach((name, i) => { const m = { id: `${id}-m${i}`, tripId: id, name, isCreator: i === 0 }; members.push(m); trip.memberIds.push(m.id); }); return mockDelay(trip); }, complete: async (id) => { if (!useMockApi)
        return request(`/api/trips/${id}/complete`, { method: 'POST' }); const t = trips.find(x => x.id === id); t.status = 'completed'; return mockDelay(t); } };
