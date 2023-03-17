<script lang="ts">
    import { createEventDispatcher } from "svelte";
	import Portal from "$lib/components/Portal.svelte";
	import Cancel from "./Icon/Cancel.svelte";
	import Overlay from "./Overlay.svelte";

    export let isVisible: boolean = false;
    const dispatch = createEventDispatcher();
</script>


<svelte:window on:keydown={(event) => {
    if (event.key === 'Escape') {
        dispatch('close');
    }
}} />


{#if isVisible}

    <Portal>

        <Overlay />

        <div class="fixed inset-0 z-modal center">
            <div class="max-w-[450px] min-h-[230px] w-full rounded-lg bg-white px-10 py-7 relative">
                <button 
                    on:click={() => dispatch('close')}
                    class="right-4 top-4 absolute text-pastelPurple hover:text-daisyBush"
                ><Cancel /></button>
                <slot></slot>
            </div>
        </div>

    </Portal>

{/if}