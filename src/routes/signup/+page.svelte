<script>
	import Animal2 from '$lib/components/animal2.svelte';
	import Button from '$lib/components/button.svelte';
	import Rainbow from '$lib/components/rainbow.svelte';
</script>

<svelte:head>
	<script src="https://tally.so/widgets/embed.js"></script>
</svelte:head>
<svelte:window on:load={Tally.loadEmbeds()} />
<section class="container">
	<h1 class="font-heading text-6xl">No Firlefanz without a firleplan</h1>
</section>
<section class="container py-12">
	<article class="max-w-xl">
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
	</article>
	<div class="mt-12">
		<a href="/">
			<Button text="Back" primary={false} />
		</a>
	</div>
</section>

<footer class="mt-12">
	<section class="container grid items-center justify-center mt-24 py-12">
		<ul class="flex gap-2">
			<li>
				<a href="/impressum"> Impressum </a>
			</li>
			<li>&</li>
			<li>
				<a href="/datenschutz"> Datenschutz </a>
			</li>
		</ul>
		<Rainbow />
		<Animal2 />
	</section>
</footer>
