<script lang="ts">
    import AdditionalOptions from "$lib/components/AdditionalOptions.svelte";
    import ThreeDots from "$lib/components/Icon/ThreeDots.svelte";
    import View from "$lib/components/Icon/View.svelte";
    import Tag from "$lib/components/Tag.svelte";
	import { convertDate, isLate } from "$lib/utils/dateHelpers";
	import { centsToDollars, sumLineItems } from "$lib/utils/moneyHelpers";
    import Send from '$lib/components/Icon/Send.svelte';
    import Trash from '$lib/components/Icon/Trash.svelte';
    import Edit from '$lib/components/Icon/Edit.svelte';
	import Modal from "$lib/components/Modal.svelte";
	import Button from "$lib/components/Button.svelte";
	import { deleteInvoice } from "$lib/stores/InvoiceStore";

    export let invoice: Invoice;
    let isAdditionalMenuShowing = false;
    let isOptionsDisabled = false;
    let isModalShowing = false;

    const handleDelete = () => { 
        isModalShowing = true;
        isAdditionalMenuShowing = false;
        console.log('deleting');
    };
    const handleEdit = () => { console.log('editing') };
    const handleSendInvoice = () => { console.log('sending') };
    
    const getInvoiceLabel = () => {
        switch(invoice.invoiceStatus) {
            case 'draft': 
                return 'draft';
            case 'sent': 
                isOptionsDisabled = true;
                return isLate(invoice.dueDate) ? 'late' : 'sent';
            case 'paid': 
                isOptionsDisabled = true;
                return 'paid';
        }
    }
</script>


<div class="invoice-table items-center invoice-row bg-white py-3 lg:py-6 rounded-lg shadow-tableRow">
    <div class="status"><Tag label={getInvoiceLabel()} className="ml-auto lg:ml-0"/></div>
    <div class="dueDate text-sm">{convertDate(invoice.dueDate)}</div>
    <div class="invoiceNumber text-sm">{invoice.invoiceNumber}</div>
    <div class="clientName text-base lg:text-xl font-bold whitespace-nowrap truncate">{invoice.client.name}</div>
    <div class="amount text-sm font-mono font-bold text-right">
        ${centsToDollars(sumLineItems(invoice.lineItems))}
    </div>
    <div class="viewButton text-sm lg:center hidden lg:flex"><a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a></div>
    <div class="moreButton center text-sm lg:text-lg hidden lg:flex relative">
        <button class="text-pastelPurple hover:text-daisyBush" on:click={() => isAdditionalMenuShowing = !isAdditionalMenuShowing}><ThreeDots /></button>
        {#if isAdditionalMenuShowing}
            <AdditionalOptions options={[
                { label: 'Edit', icon: Edit, onClick: handleEdit, disabled: isOptionsDisabled },
                { label: 'Delete', icon: Trash, onClick: handleDelete, disabled: false },
                { label: 'Send', icon: Send, onClick: handleSendInvoice, disabled: isOptionsDisabled },
            ]} />
        {/if}
    </div>
</div>


<Modal isVisible={isModalShowing} on:close={() => isModalShowing = false}>
    <div class="flex flex-col justify-between items-center gap-6 h-full min-h-[175px]">
        <div class="text-center text-xl font-bold text-daisyBush">Are you sure you want to delete this invoice to 
            <span class="text-scarlet">{invoice.client.name}</span> for
            <span class="text-scarlet">${centsToDollars(sumLineItems(invoice.lineItems))}</span>?
        </div>

        <div class="flex gap-4">
            <Button isAnimated={false} label={'Cancel'} onClick={() => {isModalShowing = false}} style="secondary" />
            <Button 
                isAnimated={false} 
                label={'Yes, Delete It'} 
                onClick={() => {
                    deleteInvoice(invoice)
                    isModalShowing = false;
                }} 
                style="destructive" 
            />
        </div>
    </div>
</Modal>


<style lang="postcss">
    .invoice-row {
        grid-template-areas: 
            'invoiceNumber invoiceNumber'
            'clientName amount' 
            'dueDate status'
    }

    @media (min-width: 1024px) {
        .invoice-row {
            grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
        }
    }

    .invoice-row .status {
        grid-area: status;
    }

    .invoice-row .dueDate {
        grid-area: dueDate;
    }

    .invoice-row .invoiceNumber {
        grid-area: invoiceNumber;
    }

    .invoice-row .clientName {
        grid-area: clientName;
    }

    .invoice-row .amount {
        grid-area: amount;
    }

    .invoice-row .viewButton {
        grid-area: viewButton;
    }

    .invoice-row .moreButton {
        grid-area: moreButton;
    }
</style>