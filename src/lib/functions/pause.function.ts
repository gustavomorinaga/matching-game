import { GAME } from '$lib/stores';
import type { TState } from '$lib/ts';
import { get } from 'svelte/store';

export const pauseGame = (event: KeyboardEvent) => {
	const stateMap: Record<string, TState> = {
		playing: 'paused',
		paused: 'playing'
	};

	const { state } = get(GAME);

	if (event.key === 'Escape' && stateMap[state])
		GAME.update((game) => ({ ...game, state: stateMap[state] }));
};
