<script>
	import { GAME } from '$lib/stores';
	import { confetti } from '@neoconfetti/svelte';
</script>

<div use:confetti />

<h1>You win! 🎉</h1>

<button on:click={() => ($GAME.state = 'playing')}>Play again</button>
