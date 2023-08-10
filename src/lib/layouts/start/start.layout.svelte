<script lang="ts">
	import { GAME } from '$lib/stores';
</script>

<h1>Matching Game 🧐</h1>

<button on:click={() => ($GAME.state = 'playing')}>Play</button>
