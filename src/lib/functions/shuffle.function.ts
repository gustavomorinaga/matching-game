export const shuffle = <Items>(items: Items[]) => {
	return items.sort(() => Math.random() - 0.5);
};
