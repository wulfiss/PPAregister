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

/* async function tableData (endpoint: string) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data ${endpoint} ${response.statusText}`);
        }
        const data = await response.json();

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "freechlorine");

        const buf = XLSX.write(wb, { type: 'array', bookType: 'xlsx'});
        const blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

        return new Response(blob,{
            headers: {
                'Content-Disposition': 'attachment; filename="freechlorine.xlsx"'
        }
    })
    } catch (error) {
        console.error('Error fetching and setting data:', error);
    }
}
 */

export { fetchDataAndSetStore };  