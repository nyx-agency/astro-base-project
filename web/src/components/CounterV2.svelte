<!-- Path: web/src/components/CounterV2.svelte -->

<script>
	let x = 0;
	let y = 0;

	function totalValue() {
		console.log("totalValue");
		return x + y;
	}

	$: total = totalValue();
</script>

Total: {total}
<button on:click={() => x++}> Increment X </button>

<button on:click={() => y++}> Increment Y </button>
