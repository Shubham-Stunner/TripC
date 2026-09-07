export type TripStatus = 'active' | 'completed'
export interface Trip { id: string; destination: string; startDate: string; endDate: string; createdAt: string; status: TripStatus }
export type NewTrip = Omit<Trip, 'id' | 'createdAt' | 'status'>
