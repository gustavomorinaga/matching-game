<script lang="ts">
	export let card: string;
	export let selected = false;
	export let flip = false;
	export let matched = false;
	export let disabled = false;
</script>

<button class="card" class:selected class:matched class:flip {disabled} on:click>
	<span class="back">
		{card}
	</span>
</button>

<style lang="scss">
	button.card {
		aspect-ratio: 1/1;
		padding: 2rem;
		font-size: 3em;
		background-color: $background-color-alt;
		border: 4px solid transparent;
		transition: background-color 0.3s 0.3s ease-out, border-color 0.3s ease-out,
			rotate 0.3s ease-out, scale 0.3s 0.3s ease-out;
		transform-style: preserve-3d;

		&.selected {
			border-color: $primary-color;
		}

		&.matched {
			background-color: darken($color: $background-color-alt, $amount: 6);
			scale: 0.9;

			& > span.back {
				opacity: 0.4;
			}
		}

		&.flip {
			rotate: y 180deg;
			pointer-events: none;
		}

		& > span.back {
			position: absolute;
			inset: 0;
			display: grid;
			place-content: center;
			backface-visibility: hidden;
			rotate: y 180deg;
			transition: opacity 0.3s 0.3s ease-out;
		}
	}

	@media (width <= 480px) {
		button.card {
			padding: 1rem;
			font-size: 2em;
		}
	}
</style>
