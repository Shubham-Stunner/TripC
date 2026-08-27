import { request, useMockApi } from './client';
import { expenses, mockDelay } from './mockStore';
export const expensesApi = { list: (tripId) => useMockApi ? mockDelay(expenses.filter(e => e.tripId === tripId)) : request(`/api/trips/${tripId}/expenses`), create: (tripId, input) => { if (!useMockApi)
        return request(`/api/trips/${tripId}/expenses`, { method: 'POST', body: JSON.stringify(input) }); const e = { id: crypto.randomUUID(), tripId, ...input }; expenses.unshift(e); return mockDelay(e); }, delete: (tripId, expenseId) => { if (!useMockApi)
        return request(`/api/trips/${tripId}/expenses/${expenseId}`, { method: 'DELETE' }); expenses.splice(expenses.findIndex(e => e.id === expenseId), 1); return mockDelay(undefined); } };
