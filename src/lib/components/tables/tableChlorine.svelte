<script lang="ts">
    import { FreeChlorineStore } from "$lib/store/chlorineStore";
	import { onMount } from "svelte";
	import { fetchDataAndSetStore } from "$lib/utils/getData";

	onMount(async () => {
		await fetchDataAndSetStore('/api/chlorine', FreeChlorineStore);
	});

	const cCenter = 'text-center normal-case';
</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th class="{cCenter}">Fecha</th>
				<th class="{cCenter}">Hora</th>
				<th class="{cCenter}">Sector</th>
				<th class="{cCenter}">Grifo</th>
                <th class="{cCenter}">Medición (ppm)</th>
			</tr>
		</thead>
		<tbody>
			{#each $FreeChlorineStore as row, i}
				<tr>
					<td class="{cCenter}">{row.date}</td>
					<td class="{cCenter}">{row.time}</td>
					<td class="{cCenter}">{row.location}</td>
					<td class="{cCenter}">{row.tap}</td>
                    <td class="{cCenter}">{row.freeChlorine}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<!-- <th colspan="3">Calculated Total Weight</th> -->
				<!-- <td>{totalWeight}</td> -->
			</tr>
		</tfoot>
	</table>
</div>