# TripC Frontend

TripC is a React + TypeScript + Vite frontend for trip expense tracking, group cost splitting, balances, and settlement summaries.

## Architecture decisions

- Standard Vite scripts now power local development, production builds, and production preview. The previous custom Node server was removed because Vite already handles static assets, SPA fallback, and preview correctly.
- The UI talks to domain API modules in `src/api/*`; components do not call `fetch` directly.
- `VITE_API_BASE_URL` is read in `src/api/client.ts`. Leave it empty to use mock services behind the API boundary while backend development is in progress.
- Financial calculations live in `src/lib/calculations.ts` only as a development/mock fallback. Backend summary and settlement endpoints should become authoritative.
- `src/lib/session.ts` provides the temporary authenticated-user abstraction so auth screens can be added later without refactoring product screens.

## Routes

- `/`
- `/trips`
- `/trips/new`
- `/trips/:tripId`
- `/trips/:tripId/members`
- `/trips/:tripId/expenses`
- `/trips/:tripId/summary`

## Windows / PowerShell commands

```powershell
npm install
npm run dev
npm run build
npm run preview
```
