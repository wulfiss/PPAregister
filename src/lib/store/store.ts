import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

interface WaterQuality {
    date: string;
    time: string;
    location: string;
    tap: number;
    freeChlorine: number;

}
const store: Writable<WaterQuality[]> = writable([
    {
        date: '2021-01-01',
        time: '09:00',
        location: 'Intermedia',
        tap: 122,
        freeChlorine: 0.2,
    },
    {
        date: '2021-01-02',
        time: '09:12',
        location: 'Intermedia',
        tap: 122,
        freeChlorine: 0.3,
    }
]);

function addItem(item: WaterQuality) {
    store.update((items) => [...items, item]);
}