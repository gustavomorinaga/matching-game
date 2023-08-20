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
		color: rgba($text-color, 0.5);
		font-size: 1.5rem;

		& > strong {
			min-width: 2rem;
			color: $text-color;
			font-size: 2rem;
			text-align: right;
			font-variant-numeric: tabular-nums;
		}
	}

	@media (width <= 480px) {
		span.attempts {
			font-size: 1rem;

			& > strong {
				min-width: 1.5rem;
				font-size: 1.5rem;
			}
		}
	}
</style>
