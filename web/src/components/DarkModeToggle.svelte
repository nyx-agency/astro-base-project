<!-- Path: web/src/components/DarkModeToggle.svelte -->
<script>
import { styles, toggleMode, setMode } from '../stores/styles';

// Utilizar el store de forma reactiva
$: isDarkMode = $styles.mode;

// Establecer el modo oscuro basado en el almacenamiento local al cargar
$: {
    if (typeof window !== 'undefined') {
        const modoInicial = localStorage.getItem("darkMode") === "true" ? "dark" : "light";
        setMode(modoInicial);
    }
}
</script>

<button on:click={toggleMode}>
    {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
</button>
