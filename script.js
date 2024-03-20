document.addEventListener("DOMContentLoaded", function() {
    // Generar el listado de proyectos ficticios
    var proyectos = [
        { nombre: "Proyecto 1", tiempoRestante: "5 días", dineroConsumido: "$1000" },
        { nombre: "Proyecto 2", tiempoRestante: "10 días", dineroConsumido: "$1500" },
        { nombre: "Proyecto 3", tiempoRestante: "2 días", dineroConsumido: "$800" }
    ];

    var proyectosContainer = document.querySelector('.proyectos');

    proyectos.forEach(function(proyecto) {
        var enlace = document.createElement('a');
        enlace.textContent = proyecto.nombre + ' (Tiempo restante: ' + proyecto.tiempoRestante + ', Dinero consumido: ' + proyecto.dineroConsumido + ')';
        enlace.href = '#';
        enlace.addEventListener('click', function() {
            mostrarPantalla('pantallaDos');
            // Aquí puedes realizar acciones adicionales al hacer clic en un proyecto, como cargar el listado de gastos del proyecto seleccionado.
        });
        proyectosContainer.appendChild(enlace);
        proyectosContainer.appendChild(document.createElement('br')); // Agrega un salto de línea entre cada enlace
    });
});
