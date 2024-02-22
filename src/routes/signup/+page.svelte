<script>
	import Animal2 from '$lib/components/animal2.svelte';
	import Button from '$lib/components/button.svelte';
	import Form from '$lib/components/form.svelte';
	import Rainbow from '$lib/components/rainbow.svelte';

	let showForm = false;
</script>

<section class="container">
	<h1 class="font-heading text-6xl">No Firlefanz without a firleplan</h1>
</section>
<section class="container py-12">
	{#if !showForm}
		<div class="bg-pink py-12 px-8 text-sm">
			<p class="text-sm">
				We need to inform you that the signup form is embedded from Tally. It operates similarly to
				visiting the Tally website directly. This means that when interacting with these embedded
				forms, you are subject to the same data collection practices, cookie usage, and potential
				tracking as if you were on the Tally website itself.
			</p>
			<p class="text-sm">
				Tally and its associated third-party services may collect information about your activities,
				use cookies for various purposes, and employ third-party tracking mechanisms. Your
				interactions with embedded content may also be monitored, especially if you have an account
				and are logged in to the Tally platform or related services.
			</p>

			<p class="text-sm">
				We encourage you to review Tally's privacy policy and terms of service for a comprehensive
				understanding of how your data is handled when using their forms or accessing their
				services.
			</p>

			<p class="text-sm">Thank you for your attention to this matter.</p>

			<div class="mt-8">
				<Button text="Show the Form" primary={true} on:click={() => (showForm = !showForm)} />
			</div>
		</div>
	{:else}
		<article class="max-w-xl">
			<Form />
		</article>
	{/if}
	<div class="mt-12 flex gap-4">
		<a href="/">
			<Button text="Go Back" primary={false} />
		</a>
		{#if showForm}
			<Button
				text="Disable Form (third-party)"
				primary={true}
				on:click={() => (showForm = !showForm)}
			/>
		{/if}
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
