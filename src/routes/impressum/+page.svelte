<script>
	import Button from '$lib/components/button.svelte';
	import Palm from '$lib/components/palm.svelte';
</script>

<section class="container">
	<h1 class="font-heading text-6xl text-pink">Impressum</h1>
</section>

<section class="container py-12">
	<h2 class="text-4xl font-heading">Website</h2>
	<p>
		Dieses Impressum gilt für alle Angebote unter der Domain https://firlefanztanz.de/ inklusive
		aller Subdomains (Unterseiten).
	</p>

	<h2 class="text-4xl font-heading mt-12">Angaben gemäß § 5 TMG</h2>
	<p>
		Céline<br />Göhlich<br />Glasblaserallee<br />Berlin<br />Telefon: 017667898614<br />E-Mail:
		firlefanztanz2024@gmail.com
	</p>

	<div class="mt-12">
		<a href="/">
			<Button text="Go Back" primary={false} />
		</a>
	</div>
</section>
<div class="absolute bottom-0 right-1/4">
	<Palm />
</div>
