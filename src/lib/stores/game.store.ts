import { writable } from 'svelte/store';
import { createGrid } from '$lib/functions';
import type { IGameState } from '$lib/ts';

export const initialState: IGameState = {
	state: 'start',
	size: 4,
	grid: [],
	maxMatches: 0,
	selected: [],
	matches: [],
	timerId: null,
	time: 120
};

export const initGameState = () => {
	const grid = createGrid(initialState.size);

	const data: IGameState = {
		...initialState,
		grid,
		maxMatches: grid.length / 2
	};

	return writable(data);
};

export const GAME = initGameState();
