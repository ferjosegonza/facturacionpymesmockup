// JavaScript personalizado aquí

// Función para abrir el modal de proveedor nuevo
function abrirModalProveedorNuevo() {
    $("#modalProveedorNuevo").show();
}

// Función para cerrar el modal de proveedor nuevo
function cerrarModalProveedorNuevo() {
    $("#modalProveedorNuevo").hide();
}

// Cuando el documento esté listo
$(document).ready(function() {
    // Asignar evento click al botón de proveedor nuevo
    $("#proveedorNuevoBtn").click(function() {
        abrirModalProveedorNuevo();
    });

    // Asignar evento click al botón de cerrar del modal de proveedor nuevo
    $(".close").click(function() {
        cerrarModalProveedorNuevo();
    });
});
