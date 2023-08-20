<script lang="ts">
	import { Attempts, Card, Matches, Timer } from '$lib/components';
	import { changeGameState, matchCards, pauseGame, selectCard, startTimer } from '$lib/functions';
	import { GAME } from '$lib/stores';

	const columns = Math.ceil(Math.sqrt($GAME.grid.length));
	const rows = Math.ceil($GAME.grid.length / columns);

	$: $GAME.maxMatches === $GAME.matches.length && changeGameState('won');
	$: $GAME.time < 0 && changeGameState('lost');
	$: $GAME.state === 'playing' && !$GAME.timerId && startTimer();
	$: $GAME.selected.length === 2 && matchCards();
</script>

<header>
	<button class="pause" on:click={pauseGame}>⏸</button>

	<div class="details">
		<Timer />

		<Attempts />
	</div>
</header>

<Matches />

<section class="cards" style="--columns: {columns}; --rows: {rows}">
	{#each $GAME.grid as card, cardIndex}
		{@const selected = $GAME.selected.includes(cardIndex)}
		{@const selectedOrMatched = selected || $GAME.matches.includes(card)}
		{@const matched = $GAME.matches.includes(card)}

		<Card
			{card}
			{selected}
			{matched}
			flip={selectedOrMatched}
			disabled={selectedOrMatched}
			on:click={() => selectCard(cardIndex)}
		/>
	{/each}
</section>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		width: 100%;

		& > button.pause {
			margin-right: auto;
			padding: 0;
		}

		& > div.details {
			display: flex;
			align-items: center;
			gap: 2rem;
		}
	}

	section.cards {
		width: 100%;
		height: fit-content;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 1rem;
	}

	@media (width <= 480px) {
		section.cards {
			grid-template-columns: repeat(var(--rows), 1fr);
		}
	}
</style>
