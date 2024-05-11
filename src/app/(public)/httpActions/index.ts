export * from './products';
import { API_BASE_URL } from '@/configs/env';

export const http = {
    get: async (path: string, revalidate?: number) => {
        try {
            const res = await fetch(API_BASE_URL + path, {
                next: {
                    revalidate: revalidate || 60
                }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = (await res.json()) as unknown;
            return data;
        } catch (error) {
            console.log(error, 'fetch error');
            return;
        }
    },
    post: (path: string, body: unknown) => {
        return new Promise((resolve, reject) => {
            fetch(API_BASE_URL + path, {
                method: 'POST',
                body: JSON.stringify(body)
            })
                .then(async (response) => {
                    if (!response.ok) {
                        const res = (await response.json()) as unknown;
                        reject(res);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    put: (path: string, body: unknown) => {
        return new Promise((resolve, reject) => {
            fetch(API_BASE_URL + path, {
                method: 'PUT',
                body: JSON.stringify(body)
            })
                .then(async (response) => {
                    if (!response.ok) {
                        const res = (await response.json()) as unknown;
                        reject(res);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};
