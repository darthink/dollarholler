<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Arrow from "./Icon/Arrow.svelte";
    import Overlay from "./Overlay.svelte";
    import Portal from "./Portal.svelte";

    const dispatch = createEventDispatcher();
</script>


<svelte:window on:keydown={(event) => {
    if (event.key === 'Escape') {
        dispatch('close');
    }
}} />


<Portal>
    <Overlay />

    <div class="bg-white fixed w-3/4 h-screen py-20 px-32 right-0 top-0 z-slidePanel shadow-slidePanel overflow-y-scroll">
        <button class="absolute top-5 left-7 text-pastelPurple hover:text-daisyBush" on:click={() => dispatch('closePanel')}><Arrow /></button>
        <slot></slot>
    </div>
</Portal>