export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? '';
export const useMockApi = API_BASE_URL.length === 0;
export class ApiError extends Error { constructor(public status:number, message:string){super(message)} }
export async function request<T>(path:string, init?:RequestInit):Promise<T>{
  const res = await fetch(`${API_BASE_URL}${path}`, { headers:{'content-type':'application/json'}, ...init });
  if(!res.ok) throw new ApiError(res.status, res.status===401?'You are not authorized yet.':`Request failed (${res.status})`);
  if(res.status===204) return undefined as T;
  return res.json() as Promise<T>;
}
