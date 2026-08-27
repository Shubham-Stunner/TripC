import { request, useMockApi } from './client';
import { members, mockDelay } from './mockStore';
export const membersApi = { list: (tripId) => useMockApi ? mockDelay(members.filter(m => m.tripId === tripId)) : request(`/api/trips/${tripId}/members`), create: (tripId, name) => { if (!useMockApi)
        return request(`/api/trips/${tripId}/members`, { method: 'POST', body: JSON.stringify({ name }) }); const m = { id: crypto.randomUUID(), tripId, name }; members.push(m); return mockDelay(m); }, update: (tripId, memberId, name) => request(`/api/trips/${tripId}/members/${memberId}`, { method: 'PATCH', body: JSON.stringify({ name }) }), delete: (tripId, memberId) => { if (!useMockApi)
        return request(`/api/trips/${tripId}/members/${memberId}`, { method: 'DELETE' }); members.splice(members.findIndex(m => m.id === memberId), 1); return mockDelay(undefined); } };
