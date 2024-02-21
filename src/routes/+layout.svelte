<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';

	// get all the stars
	import Star1 from '$lib/assets/stars/star1.svg';
	import Star2 from '$lib/assets/stars/star2.svg';
	import Star3 from '$lib/assets/stars/star3.svg';
	import Star4 from '$lib/assets/stars/star4.svg';
	import Star5 from '$lib/assets/stars/star5.svg';
	import Star6 from '$lib/assets/stars/star6.svg';
	import Star7 from '$lib/assets/stars/star7.svg';
	import Star8 from '$lib/assets/stars/star8.svg';
	import Star9 from '$lib/assets/stars/star9.svg';
	import Star10 from '$lib/assets/stars/star10.svg';
	import Star11 from '$lib/assets/stars/star11.svg';
	import Star12 from '$lib/assets/stars/star12.svg';
	import Star13 from '$lib/assets/stars/star13.svg';
	import Star14 from '$lib/assets/stars/star14.svg';
	import Star15 from '$lib/assets/stars/star15.svg';
	import Star16 from '$lib/assets/stars/star16.svg';
	import Star17 from '$lib/assets/stars/star17.svg';
	import Star18 from '$lib/assets/stars/star18.svg';
	import Star19 from '$lib/assets/stars/star19.svg';
	import AllStars from '$lib/assets/stars/allstars.svg';

	const stars = [
		Star1,
		Star2,
		Star3,
		Star4,
		Star5,
		Star6,
		Star7,
		Star8,
		Star9,
		Star10,
		Star11,
		Star12,
		Star13,
		Star14,
		Star15,
		Star16,
		Star17,
		Star18,
		Star19
	];

	let starWrapper: HTMLDivElement;
	let innerWidth: number;
	let innerHeight: number;

	// plcace all the stars randomly on the page
	/* onMount(() => {
		stars.forEach(() => {
			const star = stars[Math.floor(Math.random() * stars.length)];
			const img = new Image();
			img.src = star;
			img.style.position = 'absolute';
			img.style.top = `${Math.random() * 100}vh`;
			img.style.left = `${Math.random() * 100}vw`;

			starWrapper.appendChild(img);
		});
	}); */
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main class="min-h-screen relative z-10 text-white pt-36" style="background-image: url({AllStars})">
	<slot />
</main>
