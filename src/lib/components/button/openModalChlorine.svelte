<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function openModal() {
        dispatch('openModal');
    }

</script>

<button type="button" on:click={openModal} class="btn variant-filled-primary">
<span class="font-medium">Agregar medición</span>
</button>