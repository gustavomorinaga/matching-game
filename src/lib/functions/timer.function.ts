import { get } from 'svelte/store';
import { GAME } from '$lib/stores';

export const startTimer = () => {
	const countdown = () =>
		get(GAME).state !== 'paused' && GAME.update((game) => ({ ...game, time: game.time - 1 }));

	GAME.update((game) => ({ ...game, timerId: setInterval(countdown, 1000) }));
};
