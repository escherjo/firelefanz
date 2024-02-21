<script lang="ts">
	import { onMount } from 'svelte';
	let Tally: any;

	onMount(() => {
		Tally = window.Tally;
	});

	/* interface LoadedPayload {
		formId: string;
	}

	window.addEventListener('message', (e) => {
		if (e?.data?.includes('Tally.FormLoaded')) {
			const payload = JSON.parse(e.data).payload as LoadedPayload;
			console.log('Form loaded', payload.formId);
			// ...
		}
	}); */
</script>

<svelte:head>
	<script src="https://tally.so/widgets/embed.js"></script>
</svelte:head>
<svelte:window on:load={Tally.loadEmbeds()} />

<iframe
	data-tally-src="https://tally.so/embed/wgM7p4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
	loading="lazy"
	width="100%"
	height="621"
	frameborder="0"
	marginheight="0"
	marginwidth="0"
	title="null"
></iframe>
