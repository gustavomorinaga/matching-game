<script lang="ts">
	import { GAME } from '$lib/stores';

	export let pulseTime = 10;
</script>

<h1 class="timer" class:pulse={$GAME.time <= pulseTime}>
	{$GAME.time}
</h1>

<style lang="scss">
	h1.timer {
		transition: color 0.3s ease;

		&.pulse {
			color: $accent-color;
			animation: pulse 1s infinite ease;
		}
	}

	@keyframes pulse {
		to {
			scale: 1.4;
		}
	}
</style>
