<script lang="ts">
      import { onMount } from 'svelte';
</script>

<form on:submit={handleOnSubmit()}>
    <label for="date">Dia</label>
    <input type="date" id="date" name="date" class="input" placeholder="Input">
    <label for="time">Hora</label>
    <input type="time" name="time" id="time" class="input" placeholder="">
    <label for="Location">Sector</label>
    <input type="text" id="location" name="location" class="input" placeholder="Input">
    <label for="grifo">Grifo</label>
    <input type="number" name="tap" id="tap" class="input">
    <label for="freeChlorine">Cloro libre (ppm)</label>
    <input type="number" name="freeChlorine" id="freeChlorine" class="input">
    <button type="button" class="btn variant-filled">Guardar</button>
</form>



