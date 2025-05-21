import { setLoading } from "../redux/slice/loaderSlice";
import store from "../redux/store";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiRequestOptions {
    method?: HttpMethod;
    data?: any;
    headers?: Record<string, string>;
}

export const networkRequest = async <T>(
    endpoint: string,
    options: ApiRequestOptions = { method: 'GET' }
): Promise<T> => {
    const headers = {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        ...options.headers,
    };

    const config = {
        method: options.method,
        headers,
        body: options.method !== 'GET' ? JSON.stringify(options.data) : undefined,
    };
    // console.log('config: ', config);

    try {
        store.dispatch(setLoading(true))
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com'
        const response = await fetch(`${baseUrl}${endpoint}`, config);

        if (!response.ok) {
            if (response.status === 401) {
                window.location.href = '/login';
            }
            throw new Error(await response.text());
        }

        return response.json();
    } catch (error) {
        return Promise.reject(error);
    } finally {
        store.dispatch(setLoading(false))
    }
};