<script lang="ts">
	import { GAME } from '$lib/stores';

	export let pulseTime = 10;
</script>

<span class="timer">
	Timer:
	<strong class:pulse={$GAME.time <= pulseTime}>
		{$GAME.time}
	</strong>
</span>

<style lang="scss">
	span.timer {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba($text-color, 0.5);
		font-size: 1.5rem;
		transition: color 0.3s ease;

		& > strong {
			min-width: 3rem;
			color: $text-color;
			font-size: 1.5rem;
			text-align: center;
			font-variant-numeric: tabular-nums;

			&.pulse {
				color: $accent-color;
				animation: pulse 1s infinite ease-in-out;
			}
		}
	}

	@media (width <= 480px) {
		span.timer {
			font-size: 1rem;

			& > strong {
				min-width: 2.5rem;
				font-size: 1.25rem;
			}
		}
	}

	@keyframes pulse {
		to {
			scale: 1.4;
			opacity: 0;
		}
	}
</style>
