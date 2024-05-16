<script lang="ts">
      import { onMount } from 'svelte';
      import type { WaterQuality } from '$lib/types';
      import { store, addItem } from '$lib/store/store';

      let data: WaterQuality = {
        date: '',
        time: '',
        location: '',
        tap: 0,
        freeChlorine: 0
      };
      $: console.log($store);
</script>

<form >
    <label for="date">Dia</label>
    <input type="date" id="date" name="date" class="input" bind:value={data.date} placeholder="Input" required>
    <label for="time">Hora</label>
    <input type="time" name="time" id="time" class="input" bind:value={data.time} required>
    <label for="Location">Sector</label>
    <input type="text" id="location" name="location" class="input" bind:value={data.location} required>
    <label for="grifo">Grifo</label>
    <input type="number" name="tap" id="tap" class="input" bind:value={data.tap} required>
    <label for="freeChlorine">Cloro libre (ppm)</label>
    <input type="number" name="freeChlorine" id="freeChlorine" class="input" bind:value={data.freeChlorine} min="0" max="2.50" step="0.01" required>
    <button on:click={()=> addItem(data)} class="btn variant-filled">Guardar</button>
</form>



