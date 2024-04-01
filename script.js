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
    cargarFecha();
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

function actualizarContador() {
    var textarea = document.getElementById("nota");
    var contador = document.getElementById("contador");
    var maxLength = textarea.maxLength;
    var longitudActual = textarea.value.length;
    var caracteresRestantes = maxLength - longitudActual;
    contador.innerHTML = caracteresRestantes + " caracteres restantes";
}

function cargarFecha() {
    const fechaActual = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = fechaActual;
    document.getElementById('fecha').setAttribute('max', fechaActual);
}

function validarNumero() {
    let input = document.getElementById("montoInput");
    if (parseFloat(input.value) > 0) {
        
    } else {
        input.value = "";
        alert("No se permiten números negativos.");
    }
}

// function fechaActual() {
//     let inputFecha = document.getElementById("fecha");
//     let fechaActual = new Date().toISOString().split('T'[0]);
//     inputFecha.max = fechaActual;
//     //alert(fechaActual);
// //    return fechaActual;
// }