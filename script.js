document.addEventListener("DOMContentLoaded", function() {
    // Mostrar Pantalla Uno por defecto
    mostrarPantalla('pantallaUno');

    // Event listener para hacer clic en un proyecto y mostrar los gastos
    document.querySelectorAll('.proyecto').forEach(function(proyecto) {
        proyecto.addEventListener('click', function() {
            mostrarPantalla('pantallaDos');
            // Aquí se cargaría dinámicamente el listado de gastos del proyecto seleccionado
        });
    });

    // Event listener para el botón "Registrar Gasto" en Pantalla Dos
    document.getElementById('registrarGastoBtn').addEventListener('click', function() {
        mostrarPantalla('pantallaTres');
    });

    // Event listener para el botón "Volver" en Pantalla Tres
    document.getElementById('volverPantallaDosBtn').addEventListener('click', function() {
        mostrarPantalla('pantallaDos');
    });
});

// Función para mostrar una pantalla y ocultar las demás
function mostrarPantalla(pantallaId) {
    document.querySelectorAll('.page').forEach(function(pantalla) {
        pantalla.style.display = 'none';
    });
    document.getElementById(pantallaId).style.display = 'block';
}
