import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { WaterQuality } from "../types";

const FreeChlorineStore: Writable<WaterQuality[]> = writable([
/*     {
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
    } */
]);

function freeChlorineAddItem(item: WaterQuality) {
    FreeChlorineStore.update((items) => [...items, item]);
};


export { FreeChlorineStore, freeChlorineAddItem };

