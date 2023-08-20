<script lang="ts">
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { GAME } from '$lib/stores';

	let ref: HTMLElement;

	const autoScroll = () => ref.scrollTo({ left: ref.scrollWidth, behavior: 'smooth' });

	$: ref && $GAME.matches.length && autoScroll();
</script>

<section bind:this={ref} class="matches">
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
		width: 100%;
		min-height: 4rem;
		gap: 1rem;
		margin-block: 1rem 2rem;
		padding: 0.5rem 1rem;
		overflow: hidden;
		font-size: 2rem;
		background-color: rgba($background-color-alt, 0.5);
		border-radius: 1rem;

		& > span.match {
			display: grid;
			place-items: center;
		}
	}

	@media (width <= 480px) {
		section.matches {
			min-height: 3.5rem;
			font-size: 1.5rem;
		}
	}
</style>
