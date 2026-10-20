const productionApiBaseUrl = "https://api.dheementorship.com";
const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

export const API_BASE_URL = (configuredApiBaseUrl || (import.meta.env.DEV ? "" : productionApiBaseUrl)).replace(/\/$/, "");

export function apiUrl(path: string): string {
  return `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;
}
