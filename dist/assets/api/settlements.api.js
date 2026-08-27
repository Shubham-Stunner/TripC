import { calculateSummary } from '../lib/calculations';
import { members, expenses, mockDelay } from './mockStore';
export const settlementsApi = { summary: (tripId) => mockDelay(calculateSummary(tripId, members.filter(m => m.tripId === tripId), expenses.filter(e => e.tripId === tripId))), settlements: async (tripId) => (await settlementsApi.summary(tripId)).settlements };
