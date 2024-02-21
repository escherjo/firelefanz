<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Animal from '$lib/components/animal.svelte';
	import Disco from '$lib/components/disco.svelte';
	import Header from '$lib/components/header.svelte';
	import Mango from '$lib/components/mango.svelte';
	import Ufo from '$lib/components/ufo.svelte';
	import Sun from '$lib/components/sun.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { content } = data;

	const splitByNewLine = (str: string) => {
		return str.split(/\r\n|\r|\n/);
	};

	const pink = splitByNewLine(content.acf.pink);
	const green = splitByNewLine(content.acf.green);
</script>

<Header />
<section class="bg-green w-full py-12 relative mt-20">
	<Ufo />
	<Disco />
	<Mango />
	<article class="container relative">
		<div class="absolute top-16 left-0 -translate-x-full -translate-y-full">
			<Animal />
		</div>
		{#each green as item}
			<p>{item}</p>
		{/each}
	</article>
</section>

<section class="bg-pink mt-56 py-12">
	<article class="container grid gap-4 lg:grid-cols-12 relative">
		<div class="lg:col-span-7">
			{#each pink as item}
				<p>{item}</p>
			{/each}
		</div>
		<div class="lg:col-span-5 grid items-center justify-center">
			<a href="/signup">
				<Button primary={true} text="Enter the Firlefanz" />
			</a>
		</div>
		<Sun />
	</article>
</section>

<footer class="mt-48 py-12">
	<nav class="container grid items-center justify-center">
		<ul class="flex gap-2">
			<li>
				<a href="/impressum"> Impressum </a>
			</li>
			<li>&</li>
			<li>
				<a href="/datenschutz"> Datenschutz </a>
			</li>
		</ul>
	</nav>
</footer>
