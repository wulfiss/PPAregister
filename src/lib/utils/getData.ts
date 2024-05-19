import type { Writable } from "svelte/store";

async function fetchDataAndSetStore<T>(endpoint: string, store: Writable<T>) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data ${endpoint} ${response.statusText}`);
        }
        const data: T = await response.json();
        store.set(data);
    }catch (error) {
        console.error('Error fetching and setting data:', error);
    }
}

export { fetchDataAndSetStore };    