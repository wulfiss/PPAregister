<script lang="ts">
    import { FreeChlorineStore } from "$lib/store/chlorineStore";
	import { onMount } from "svelte";
	import { fetchDataAndSetStore } from "$lib/utils/getData";
	import DownloadXlsx from "../button/DownloadXLSX.svelte";
	import type { WaterQuality } from "$lib/types";

	onMount(async () => {
		await fetchDataAndSetStore('/api/chlorine', FreeChlorineStore);
		await import("active-table");
		isLoaded = true;
	});

  	let isLoaded = false;
  	const data = [
    ["Fecha", "Hora", "Sector", "Grifo", "Medición (ppm)"],
  	];

	function updateData(store: WaterQuality[]) {
		data.length = 1;
		store.forEach((row: WaterQuality ) => {
			data.push([row.date, row.time, row.location, row.tap, row.freeChlorine]);
		});
	}

	FreeChlorineStore.subscribe((store: WaterQuality[]) => {
		updateData(store);
	});
	/* $: $FreeChlorineStore.forEach((row) => {
		data.push([row.date, row.time, row.location, row.tap, row.freeChlorine]);
	});		 */
	console.log(data);
</script>

<main>
	<h1>Active Table</h1>
  {#if isLoaded}
  <div class="table-container">
    <active-table 
      data={data}
	  filter={
		{
			dropdown: true,
			caseButton : false,
			placeHolderTemplate: "Buscar...",
			order: 1,
			defaultColumnHeaderName: "Filtrar por",
			position: "top-left",
		}
	  }
	  isCellTextEditable= {false}
	  displayAddNewColumn= {false}
	  displayAddNewRow= {false}
	  columnDropdown={{displaySettings: {isAvailable: false}}}
	  rowDropdown={{displaySettings: {isAvailable: false}}}
	  tableStyle={{borderRadius: "5px", border: "unset", backgroundColor: "black"}}
	  cellStyle={{color: "white", borderRight: "1px solid #00000029"}}
	  columnResizerColors={{click: "#727272"}}
	  stripedRows={{odd: {backgroundColor: "#4f4f4f"}, even: {backgroundColor: "#373737"}}}
	  headerStyles={{default: {backgroundColor: "#2d2d2d"}, hoverColors: {backgroundColor: "#353535"}}}
	  headerIconStyle={
		{filterColor: "brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(6%) hue-rotate(76deg) brightness(100%) contrast(104%)"}
	  }
	  frameComponentsStyles={
		{style: {hoverColors: {backgroundColor: "#5f5f5f"}},
		inheritHeaderColors: true}
	  }
    />
	</div>
  {/if}

</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

