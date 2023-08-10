import { GAME } from '$lib/stores';

export const selectCard = (cardIndex: number) =>
	GAME.update((game) => ({ ...game, selected: game.selected.concat(cardIndex) }));
