import { emojis } from '$lib/data';
import { shuffle } from '$lib/functions';

export const createGrid = (size: number) => {
	const cards = new Set<string>();
	const maxSize = size / 2;

	const categories = Object.keys(emojis);
	const randomCategory = Math.floor(Math.random() * categories.length);
	const currentEmojis = emojis[categories[randomCategory]];

	while (cards.size < maxSize) {
		const randomIndex = Math.floor(Math.random() * currentEmojis.length);
		cards.add(currentEmojis[randomIndex]);
	}

	return shuffle([...cards, ...cards]);
};
