function mostrarDetalle(idProyecto) {
    document.getElementById('listado_proyectos').style.display = 'none';
    document.getElementById('listado_gasto').style.display = 'block';
    document.getElementById('registrar_gasto').style.display = 'none';
    document.getElementById('modalNuevoProveedor').style.display = 'none';
    

    document.getElementById('gasto-id').textContent = idProyecto;
}

function agregarGasto() {
    document.getElementById('listado_proyectos').style.display = 'none';
    document.getElementById('listado_gasto').style.display = 'none';
    document.getElementById('registrar_gasto').style.display = 'block';
    document.getElementById('modalNuevoProveedor').style.display = 'none';
    // document.getElementById('agregar-gasto-id').textContent = ;
}

function volverListadoProyectos() {
    document.getElementById('listado_proyectos').style.display = 'block';
    document.getElementById('listado_gasto').style.display = 'none';
    document.getElementById('registrar_gasto').style.display = 'none';
    document.getElementById('modalNuevoProveedor').style.display = 'none';
}

function volverListadoGastos() {
    document.getElementById('listado_proyectos').style.display = 'none';
    document.getElementById('listado_gasto').style.display = 'block';
    document.getElementById('registrar_gasto').style.display = 'none';
    document.getElementById('modalNuevoProveedor').style.display = 'none';
}


// START actualizar Moneda Simbolo

const monedaRadio = document.getElementsByName('moneda');
const monedaSimbolo = document.getElementById('monedaSimbolo');

function actualizarMonedaSimbolo() {
    const monedaSeleccionada = document.querySelector('input[name="moneda"]:checked');
    monedaSimbolo.textContent = monedaSeleccionada.value === 'colones' ? '₡' : '$';
}

actualizarMonedaSimbolo();
monedaRadio.forEach((radio) => radio.addEventListener('change', actualizarMonedaSimbolo));

// END actualizar Moneda Simbolo


function abrirModalNuevoProveedor() {
    try {
        let modal = new bootstrap.Modal(document.getElementById('modalNuevoProveedor'));
    } catch (error) {
        alert(error);
    }

    modal.show();
}