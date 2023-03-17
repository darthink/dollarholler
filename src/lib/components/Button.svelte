<script lang="ts">
    import { SvelteComponent } from 'svelte';
    
    export let label: string;
    export let onClick: () => void;
    export let style: 'primary' | 'secondary' | 'destructive' | 'outline' | 'textOnly' = 'primary';
    export let isAnimated = true;
    // class:isAnimated={isAnimated} can be class:isAnimated
    export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
    export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
</script>


<button 
    on:click|preventDefault={() => onClick()}
    class="flex items-center relative whitespace-nowrap rounded-lg px-5 py-2 lg:px-10 lg:py-3 font-sansSerif text-base lg:text-xl font-black"
    class:primary={style === 'primary'}
    class:secondary={style === 'secondary'}
    class:destructive={style === 'destructive'}
    class:outline={style === 'outline'}
    class:textOnly={style === 'textOnly'}
    class:isAnimated>
    {#if iconLeft}
        <svelte:component this={iconLeft} class="mr-2" />
    {/if}

    {label}

    {#if iconRight}
        <svelte:component this={iconRight} class="ml-2" />
    {/if}
</button>


<style lang="postcss">
    .isAnimated {
        @apply shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all
    }

    .primary {
        @apply bg-lavenderIndigo text-white;
    }

    .secondary { 
        @apply bg-gallery text-daisyBush;
    }

    .destructive { 
        @apply bg-scarlet text-goldenFizz;
    }

    .outline { 
        @apply border-daisyBush text-daisyBush hover:bg-daisyBush hover:text-white;
    }

    .textOnly {
        @apply bg-transparent px-0 text-scarlet underline hover:no-underline;
    }
</style>