# TripC Frontend

Production-oriented, API-ready frontend for TripC, a trip expense manager and group cost splitter.

## Architecture decisions

- The UI talks to domain API modules in `src/api/*`; components never call `fetch` directly.
- `VITE_API_BASE_URL` is represented by `API_BASE_URL` in `src/api/client.ts`. When no backend URL is present, the app uses mock services behind the same API boundary.
- Financial calculations live in `src/lib/calculations.ts` only as a display fallback for development mocks. Backend summary and settlement endpoints should become authoritative.
- `src/lib/session.ts` provides the temporary authenticated-user abstraction so auth routes can be added later without refactoring screens.

## Routes

`/`, `/trips`, `/trips/new`, `/trips/:tripId`, `/trips/:tripId/members`, `/trips/:tripId/expenses`, `/trips/:tripId/summary`.

## Run

```bash
npm run build
npm run dev
```
