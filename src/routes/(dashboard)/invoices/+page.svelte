<script lang="ts">
    import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
    import { onMount } from "svelte";
	import CircledAmount from "$lib/components/CircledAmount.svelte";
    import Search from "$lib/components/Search.svelte";
	import InvoiceRow from "./InvoiceRow.svelte";
	import { centsToDollars, sumInvoices } from "$lib/utils/moneyHelpers";
	import BlankState from "./BlankState.svelte";
	import InvoiceRowHeader from "./InvoiceRowHeader.svelte";
	import Button from "$lib/components/Button.svelte";
	import SlidePanel from "$lib/components/SlidePanel.svelte";
	import InvoiceForm from "./InvoiceForm.svelte";

    let isInvoiceShowing: boolean = false;

    onMount(() => {
        loadInvoices();
        console.log($invoices);
    });
</script>

<svelte:head>
    <title>Invoices | The Dollar Holler</title>
</svelte:head>


<div class="mb-7 gap-y-6 md:gap-y-4 lg:mb-16 flex flex-col-reverse items-start justify-between md:flex-row md:items-center ">

    {#if $invoices.length > 0}
        <Search />
    {:else}
        <div />
    {/if}


    <div>
        <Button isAnimated={true} label="+ Invoice" onClick={() => isInvoiceShowing = true} style='primary' />
    </div>


</div>


<div>

    {#if $invoices === null}

        Loading...

    {:else if $invoices.length <= 0}

        <BlankState />

    {:else}

        <InvoiceRowHeader className="text-daisyBush" />

        <div class="flex flex-col-reverse">
            {#each $invoices as invoice}
                <InvoiceRow {invoice} />
                {/each}
        </div>

        <CircledAmount label="Total" amount="{`$${centsToDollars(sumInvoices($invoices))}`}" />

    {/if}

</div>


<!-- Slide panel -->
{#if isInvoiceShowing}
    <SlidePanel on:closePanel={() => {
        isInvoiceShowing = false;
    }}>
        
        <InvoiceForm />
    </SlidePanel>
{/if}