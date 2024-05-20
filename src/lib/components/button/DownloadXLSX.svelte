<script lang="ts">

    function downloadXLSX() {
        window.location.href ='/api/chlorine/xlsx';
	}

</script>

<button on:click={() => downloadXLSX()} class="btn variant-filled-primary">Descarga XLSX</button>
