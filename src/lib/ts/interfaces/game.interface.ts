import type { TState } from '$lib/ts';

export interface IGameState {
	state: TState;
	size: number;
	grid: string[];
	maxMatches: number;
	selected: number[];
	matches: string[];
	timerId: number | null;
	time: number;
	attempts: number;
}
