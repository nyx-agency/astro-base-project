<script>
import { styles, toggleMode } from '../stores/styles';
import { onDestroy } from 'svelte';

let isDarkMode;

// Suscribirse al store y actualizar isDarkMode
const unsubscribe = styles.subscribe($styles => {
    console.log('styles', $styles)
    isDarkMode = $styles.isDarkMode;
});

// Limpiar la suscripción al destruir el componente
onDestroy(unsubscribe);
</script>

<button on:click={toggleMode} class="i-carbon-sun dark:i-carbon-moon" />

<button on:click={toggleMode}>
    {$styles.isDarkMode ? 'Modo oscuro' : 'Modo claro'}
</button>
