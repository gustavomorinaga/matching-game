import { resetGame } from '$lib/functions';
import { GAME } from '$lib/stores';
import type { TState } from '$lib/ts';

export const changeGameState = (state: TState) => {
	const setState = () => {
		GAME.update((game) => ({ ...game, state }));
		setTimeout(resetGame, 500);
	};

	state === 'won' ? setTimeout(setState, 1000) : setState();
};
