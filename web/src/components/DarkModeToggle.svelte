<script>
import { styles, toggleMode } from '../stores/styles';
import { onDestroy } from 'svelte';

let isDarkMode;

// Suscribirse al store y actualizar isDarkMode
const unsubscribe = styles.subscribe($styles => {
    isDarkMode = $styles.isDarkMode;
});

// Función para manejar eventos de teclado
function handleKeydown(event) {
    // Verifica si la tecla presionada es 'Enter' o 'Espacio'
    if (event.key === 'Enter' || event.key === ' ') {
        toggleMode();
    }
}

// Limpiar la suscripción al destruir el componente
onDestroy(unsubscribe);
</script>

<div
    role="button"
    tabindex="0"
    on:click={toggleMode}
    on:keydown={handleKeydown}
    aria-label="Toggle dark mode"
>
    <span
        class="i-carbon-sun dark:i-carbon-moon"
        aria-hidden="true"
    />
    <span id="labeldiv">{$styles.isDarkMode ? 'Modo oscuro' : 'Modo claro'}</span>
</div>
