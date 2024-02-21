<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Animal from '$lib/components/animal.svelte';
	import Disco from '$lib/components/disco.svelte';
	import Header from '$lib/components/header.svelte';
	import Mango from '$lib/components/mango.svelte';
	import Ufo from '$lib/components/ufo.svelte';
	import Sun from '$lib/components/sun.svelte';

	export let data;

	console.log(data);

	const nl2br = (str) => {
		return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
	};

	const green = nl2br(data.content.acf.green);
	console.log(green);
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
		<p>
			{@html nl2br(data.content.acf.green)}
		</p>
	</article>
</section>

<section class="bg-pink mt-56 py-12">
	<article class="container grid gap-4 grid-cols-12 relative">
		<div class="col-span-7">
			<p>
				{@html nl2br(data.content.acf.pink)}
			</p>
		</div>
		<div class="col-span-5 grid items-center justify-center">
			<a href="/signup">
				<Button primary={true} text="About" />
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
