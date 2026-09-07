const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

function dateFromIso(isoDate: string) { return new Date(`${isoDate}T00:00:00.000Z`) }

export function formatTripDate(isoDate: string) { return dateFormatter.format(dateFromIso(isoDate)) }
export function getTripDuration(startDate: string, endDate: string) {
  return Math.round((dateFromIso(endDate).getTime() - dateFromIso(startDate).getTime()) / 86_400_000) + 1
}
export function isDateRangeValid(startDate: string, endDate: string) { return getTripDuration(startDate, endDate) > 0 }
export function formatDuration(days: number) { return `${days} ${days === 1 ? 'day' : 'days'}` }
