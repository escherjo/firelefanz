<script lang="ts">
	export let text = 'Button';
	export let primary = true;
</script>

<button
	class="rounded-full px-8 py-4 border-2 border-white hover:-rotate-6 transition-all duration-300 hover:scale-105 uppercase"
	class:bg-green={primary}
	class:bg-pink={!primary}
>
	<p class="font-bold">
		{text}
	</p>
</button>
