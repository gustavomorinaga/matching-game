<script>
	import { GAME } from '$lib/stores';
</script>

<h1>You lost! 💩</h1>

<button on:click={() => ($GAME.state = 'playing')}>Play again</button>
