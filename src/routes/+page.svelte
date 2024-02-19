<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Animal from '$lib/components/animal.svelte';
	import Disco from '$lib/components/disco.svelte';
	import Header from '$lib/components/header.svelte';
	import Mango from '$lib/components/mango.svelte';
	import Ufo from '$lib/components/ufo.svelte';
	import Sun from '$lib/components/sun.svelte';
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
			A statue of a glittering pink Schnauzer dog named “Schröder”, an entire day's work for a
			costume worn just for one night, a wheel of fortune with illegal prizes, a talking cactus, or
			a hat with an anime face and inflatable ears…
		</p>

		<p>
			Some people might groan: "What a load of rubbish!", as FIRLEFANZ (frippery) may be considered
			by the general public as worthless stuff - something you don't really need in your life. For
			others, Firlefanz refers to nonsensical talk or even absurd ideas. "Der/Die hat doch nur
			Firlefanz im Kopf!", one might say. But don’t they fail to recognise the beauty of it?
		</p>

		<p>
			The term ‘Firlefanz’ originates from the Middle High German word ‘virlefanz’, meaning a ‘sort
			of dance' where people sung and circled around. Later, ‘Firlefanz’ emerged, drawing
			inspiration from 'alfanz,' initially a comical embellishment in architecture, later applied in
			Modern High German to describe foppish, silly manners or crude yet amusing pranks.
		</p>
	</article>
</section>

<section class="bg-pink mt-56 py-12">
	<article class="container grid gap-4 grid-cols-12 relative">
		<div class="col-span-7">
			<p>
				For us however, Firlefanz transcends mere frivolities and should not be underestimated. Let
				us co-create a temporary safer space, in which we explore its playful and caring aspects.
			</p>
			<p>
				Let us cultivate the humorous and hedonistic art of the unnecessary. And return to the
				origins of Firlefanz for an ecstatic rave throughout the night - or as those 14th century
				Middle High Germans would have called it - a “sort of dance”.
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
