<script lang="ts">
  import { getModalStore } from '@skeletonlabs/skeleton';
  import { freeChlorineAddItem } from '$lib/store/chlorineStore';

  const modalStore = getModalStore();
  export let parent;

  let data = {
    date: '',
    time: '',
    location: '',
    tap: 0,
    freeChlorine: 0
  };

  function onFormSubmit() {
    if ($modalStore[0].response) {
      $modalStore[0].response(data); 
    }
    freeChlorineAddItem(data);
    modalStore.close();
    resetForm();
  }

  function resetForm() {
    data = {
      date: '',
      time: '',
      location: '',
      tap: 0,
      freeChlorine: 0
    };
  }

  const cBase = 'card p-4 w-modal shadow-xl space-y-4';
  const cHeader = 'text-2xl font-bold';
  const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
  <div class="modal-example-form {cBase}">
    <header class={cHeader}>Agregar nueva medición</header>
    <article></article>
    <form class="modal-form {cForm}" on:submit|preventDefault={onFormSubmit}>
      <label class="label">
        <span>Fecha</span>
        <input type="date" id="date" name="date" class="input" bind:value={data.date} required>
      </label>
      <label class="label">
        <span>Hora</span>
        <input type="time" name="time" id="time" class="input" bind:value={data.time} required>
      </label>
      <label class="label">
        <span>Sector</span>
        <input type="text" id="location" name="location" class="input" bind:value={data.location} required>
      </label>
      <label class="label">
        <span>Grifo</span>
        <input type="number" name="tap" id="tap" class="input" bind:value={data.tap} required>
      </label>
      <label class="label">
        <span>Cloro libre (ppm)</span>
        <input type="number" name="freeChlorine" id="freeChlorine" class="input" bind:value={data.freeChlorine} min="0" max="2.50" step="0.01" required>
      </label>
      <footer class="modal-footer {parent.regionFooter}">
        <button type="button" class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancelar</button>
        <button type="submit" class="btn {parent.buttonPositive}">Agregar</button>
      </footer>
    </form>
  </div>
{/if}
