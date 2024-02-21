<script>
	import Animal2 from '$lib/components/animal2.svelte';
	import Button from '$lib/components/button.svelte';
	import Form from '$lib/components/form.svelte';
	import Rainbow from '$lib/components/rainbow.svelte';

	let showForm = false;

	$: console.log('showForm', showForm);
</script>

<section class="container">
	<h1 class="font-heading text-6xl">No Firlefanz without a firleplan</h1>
</section>
<section class="container py-12">
	<article class="max-w-xl">
		<input type="checkbox" bind:checked={showForm} class="mb-4" />
		{#if showForm}
			<Form />
		{/if}
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
