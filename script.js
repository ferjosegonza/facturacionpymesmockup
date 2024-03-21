function mostrarDetalle(idProyecto) {
    document.getElementById('listado_proyectos').style.display = 'none';
    document.getElementById('listado_gasto').style.display = 'block';
    document.getElementById('gasto-id').textContent = idProyecto;
}

function agregarGasto() {
    document.getElementById('listado_proyectos').style.display = 'none';
    document.getElementById('listado_gasto').style.display = 'none';
    document.getElementById('registrar_gasto').style.display = 'block';
    // document.getElementById('agregar-gasto-id').textContent = ;
}

function volverListadoProyectos() {
    document.getElementById('listado_proyectos').style.display = 'block';
    document.getElementById('listado_gasto').style.display = 'none';
    document.getElementById('registrar_gasto').style.display = 'none';
}

function volverListadoGastos() {
    document.getElementById('listado_proyectos').style.display = 'none';
    document.getElementById('listado_gasto').style.display = 'block';
    document.getElementById('registrar_gasto').style.display = 'none';
}
