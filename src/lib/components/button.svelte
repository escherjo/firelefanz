<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text = 'Button';
	export let primary = true;
</script>

<button
	on:click={() => dispatch('click')}
	class="rounded-full py-3 px-5 lg:px-8 lg:py-4 border-2 border-white hover:-rotate-6 transition-all duration-300 hover:scale-105 uppercase"
	class:bg-green={primary}
	class:bg-pink={!primary}
>
	<p class="lg:font-bold text-lg lg:text-xl">
		{text}
	</p>
</button>
