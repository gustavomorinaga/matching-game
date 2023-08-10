import { get } from 'svelte/store';
import { GAME } from '$lib/stores';

export const matchCards = () => {
	const { grid, selected } = get(GAME);
	const [first, second] = selected;

	if (grid[first] === grid[second])
		GAME.update((game) => ({ ...game, matches: [...new Set(game.matches.concat(grid[first]))] }));

	setTimeout(() => GAME.update((game) => ({ ...game, selected: [] })), 500);
};
