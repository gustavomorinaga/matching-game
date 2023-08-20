<script lang="ts">
	import { Attempts, Matches, Timer } from '$lib/components';
	import { changeGameState, pauseGame, resetGame } from '$lib/functions';

	let rotate = false;

	const restartGame = () => {
		resetGame();

		rotate = true;
		setTimeout(() => (rotate = false), 500);
	};
</script>

<header class="hud">
	<div class="actions">
		<button title="Pause" on:click={pauseGame}>⏸</button>
		<button title="Restart" class:rotate on:click={restartGame}>🔁</button>
		<button title="Home" on:click={() => changeGameState('start')}>🏠</button>
	</div>

	<div class="details">
		<Timer />
		<Attempts />
	</div>
</header>

<Matches />

<style lang="scss">
	header.hud {
		display: flex;
		justify-content: space-between;
		width: 100%;

		& > div:is(.actions, .details) {
			display: flex;
			align-items: center;
		}

		& > div.actions {
			overflow: hidden;
			background-color: $background-color-alt;
			border-radius: 0.5rem;

			& > button {
				padding: 0 0.75rem;
				height: 100%;

				&.rotate {
					animation: rotate 0.5s ease-out;
				}
			}
		}

		& > div.details {
			gap: 2rem;
		}
	}

	@media (width <= 480px) {
		header.hud {
			& > div.details {
				gap: 1rem;
			}
		}
	}

	@keyframes rotate {
		to {
			rotate: 360deg;
		}
	}
</style>
