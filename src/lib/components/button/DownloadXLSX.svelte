<script lang="ts">
    import { tableData } from "$lib/utils/getData";

    function downloadXLSX() {
		window.location.href = '/api/chlorine/download';
	}

</script>

<button on:click={downloadXLSX} class="btn variant-filled-primary">Descarga XLSX</button>