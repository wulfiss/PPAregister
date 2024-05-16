<script lang="ts">
      import { onMount } from 'svelte';
      let data = {
        date: '',
        time: '',
        location: '',
        tap: 0,
        freeChlorine: 0
      };

</script>

<form >
    <label for="date">Dia</label>
    <input type="date" id="date" name="date" class="input" bind:value={data.date} placeholder="Input">
    <label for="time">Hora</label>
    <input type="time" name="time" id="time" class="input" bind:value={data.time}>
    <label for="Location">Sector</label>
    <input type="text" id="location" name="location" class="input" bind:value={data.location}>
    <label for="grifo">Grifo</label>
    <input type="number" name="tap" id="tap" class="input" bind:value={data.tap}>
    <label for="freeChlorine">Cloro libre (ppm)</label>
    <input type="number" name="freeChlorine" id="freeChlorine" class="input" bind:value={data.freeChlorine}>
    <button type="submit" class="btn variant-filled">Guardar</button>
</form>



