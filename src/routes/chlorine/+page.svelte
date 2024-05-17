<script lang="ts">
import TableChlorine from "$lib/components/tables/tableChlorine.svelte";
import FormChlorine from "$lib/components/form/formChlorine.svelte";
import { getModalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
import OpenModalChlorine from "$lib/components/button/openModalChlorine.svelte";

const modalStore = getModalStore();
const modalComponent: ModalComponent = { ref: FormChlorine };

const modal: ModalSettings = {
	type: 'component',
    component: modalComponent,
	response: (data) => {
      console.log('Form submitted:', data);
    },
};

function openModal() {
  modalStore.trigger(modal);
}

</script>

<h1>Cloro Libre</h1>
<TableChlorine />
<OpenModalChlorine on:openModal={openModal} />
