import { GAME } from '$lib/stores';
import type { TState } from '$lib/ts';
import { get } from 'svelte/store';

export const pauseGame = (event: MouseEvent | KeyboardEvent) => {
	const isMouseEvent = event instanceof MouseEvent;
	const isKeyboardEvent = event instanceof KeyboardEvent;

	const stateMap: Record<string, TState> = {
		playing: 'paused',
		paused: 'playing'
	};

	const { state } = get(GAME);

	if (isMouseEvent || (isKeyboardEvent && event.key === 'Escape' && stateMap[state]))
		GAME.update((game) => ({ ...game, state: stateMap[state] }));
};
