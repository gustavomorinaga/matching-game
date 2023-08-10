<script lang="ts">
	import { scale } from 'svelte/transition';
	import { GAME } from '$lib/stores';
</script>

<section class="matches">
	{#each $GAME.matches as match}
		<span class="match" in:scale>{match}</span>
	{/each}
</section>

<style lang="scss">
	section.matches {
		display: flex;
		width: 100%;
		min-height: 5rem;
		gap: 1rem;
		margin-block: 2rem;
		font-size: 3rem;
	}
</style>
