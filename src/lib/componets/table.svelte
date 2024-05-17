<script lang="ts">
    import { store } from "$lib/store/store";

</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Fecha</th>
				<th>Hora</th>
				<th>Sector</th>
				<th>Grifo</th>
                <th>Medicion ppm</th>
			</tr>
		</thead>
		<tbody>
			{#each $store as row, i}
				<tr>
					<td>{row.date}</td>
					<td>{row.time}</td>
					<td>{row.location}</td>
					<td>{row.tap}</td>
                    <td>{row.freeChlorine}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<!-- <td>{totalWeight}</td> -->
			</tr>
		</tfoot>
	</table>
</div>