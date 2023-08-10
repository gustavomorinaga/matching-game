import { get } from 'svelte/store';
import { GAME, initialState } from '$lib/stores';
import { createGrid } from '$lib/functions';

export const resetGame = () => {
	const { timerId } = get(GAME);

	timerId && clearInterval(timerId);

	const grid = createGrid(initialState.size);

	GAME.update((game) => ({
		...initialState,
		grid,
		maxMatches: grid.length / 2,
		state: game.state
	}));
};
