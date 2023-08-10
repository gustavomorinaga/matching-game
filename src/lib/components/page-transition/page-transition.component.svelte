<script lang="ts">
	import { fade } from 'svelte/transition';

	export let trigger: any;
	export let duration = 300;
</script>

{#key trigger}
	<div class="page-transition" in:fade={{ duration, delay: duration }} out:fade={{ duration }}>
		<slot />
	</div>
{/key}

<style lang="scss">
	div.page-transition {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
