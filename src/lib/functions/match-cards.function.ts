import { get } from 'svelte/store';
import { GAME } from '$lib/stores';

const DEBOUNCE_TIME = 350;

export const matchCards = () => {
	const { grid, selected, attempts } = get(GAME);
	const [first, second] = selected;

	if (grid[first] === grid[second])
		GAME.update((game) => ({ ...game, matches: [...new Set(game.matches.concat(grid[first]))] }));

	setTimeout(
		() => GAME.update((game) => ({ ...game, selected: [], attempts: attempts + 1 })),
		DEBOUNCE_TIME
	);
};
