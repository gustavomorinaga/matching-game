<script lang="ts">
	import { GAME } from '$lib/stores';
</script>

<span class="attempts">
	Attempts:
	<strong>{$GAME.attempts}</strong>
</span>

<style lang="scss">
	span.attempts {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-block: 0 2rem;
		color: rgba($text-color, 0.5);
		font-size: 1.5rem;

		& > strong {
			color: $text-color;
			font-size: 2rem;
		}
	}
</style>
