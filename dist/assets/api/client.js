export const API_BASE_URL = globalThis.__VITE_API_BASE_URL__ || '';
export const useMockApi = !API_BASE_URL;
export async function request(path, init) { const res = await fetch(`${API_BASE_URL}${path}`, { headers: { 'content-type': 'application/json' }, ...init }); if (!res.ok)
    throw new Error(`API ${res.status}: ${res.statusText}`); return res.json(); }
