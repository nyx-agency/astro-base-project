<script>
    let contador = 0;
    $: contadorDuplicado = contador * 2;

    function incrementar() {
        console.log("incrementar");
        contador += 1;
    }
</script>

<button on:click={incrementar}>Incrementar</button>
<p>Contador: {contador}</p>
<p>Contador Duplicado: {contadorDuplicado}</p>
