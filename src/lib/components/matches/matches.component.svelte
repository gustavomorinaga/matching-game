<script lang="ts">
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { GAME } from '$lib/stores';
</script>

<section class="matches">
	{#each $GAME.matches as match}
		<span class="match" in:scale={{ delay: 500, duration: 1000, easing: elasticOut }}>
			{match}
		</span>
	{/each}
</section>

<style lang="scss">
	section.matches {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		min-height: 6rem;
		gap: 1rem;
		margin-block: 1rem;
		padding: 0.5rem 1rem;
		font-size: 3rem;
		background-color: rgba($background-color-alt, 0.5);
		border-radius: 1rem;
		pointer-events: none;
		user-select: none;

		& > span.match {
			display: grid;
			place-items: center;
		}
	}
</style>
