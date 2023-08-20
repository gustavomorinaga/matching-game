<script lang="ts">
	import { PageTransition } from '$lib/components';
	import { pauseGame } from '$lib/functions';
	import { LostLayout, PausedLayout, PlayingLayout, StartLayout, WonLayout } from '$lib/layouts';
	import { GAME } from '$lib/stores';
</script>

<svelte:head>
	<title>Matching Game 🧐</title>
	<meta
		name="description"
		content="Try to match all the cards in the least amount of moves and time possible."
	/>
</svelte:head>

<svelte:window on:keydown={pauseGame} />

<PageTransition trigger={$GAME.state}>
	<div class="container">
		{#if $GAME.state === 'start'}
			<StartLayout />
		{/if}

		{#if $GAME.state === 'won'}
			<WonLayout />
		{/if}

		{#if $GAME.state === 'lost'}
			<LostLayout />
		{/if}

		{#if $GAME.state === 'paused'}
			<PausedLayout />
		{/if}

		{#if $GAME.state === 'playing'}
			<PlayingLayout />
		{/if}
	</div>
</PageTransition>

<style lang="scss">
	div.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		max-width: 1024px;
		margin: 0 auto;
		padding: 2rem;
		overflow: hidden;
	}

	@media (width <= 1366px) {
		div.container {
			max-width: 720px;
		}
	}

	@media (width <= 480px) {
		div.container {
			margin-top: -5vh;
			padding: 1rem;
		}
	}
</style>
