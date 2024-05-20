<script lang="ts">
    export const endpointCustom: string = ''

    function downloadXLSX(endpointCustom: string) {
        window.location.href = endpointCustom;
	}

</script>

<button on:click={() => downloadXLSX(endpointCustom)} class="btn variant-filled-primary">Descarga XLSX</button>
