<script lang="ts">
	import { Card, Matches, Timer } from '$lib/components';
	import { changeGameState, matchCards, selectCard, startTimer } from '$lib/functions';
	import { GAME } from '$lib/stores';

	$: $GAME.selected.length === 2 && matchCards();
	$: $GAME.maxMatches === $GAME.matches.length && changeGameState('won');
	$: $GAME.time < 0 && changeGameState('lost');
	$: $GAME.state === 'playing' && !$GAME.timerId && startTimer();
</script>

<Timer />

<Matches />

<section class="cards">
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
	section.cards {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		gap: 1rem;
	}
</style>
