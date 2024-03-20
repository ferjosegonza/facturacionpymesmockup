// JavaScript para mostrar/ocultar detalles del proyecto al hacer clic
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const details = this.nextElementSibling;
            details.style.display = (details.style.display === 'none') ? 'block' : 'none';
        });
    });
});