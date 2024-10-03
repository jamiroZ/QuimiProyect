let contador = 0;

function ocultarBotones() {
    contador++;
    if (contador === 2) {
        const botones = document.querySelectorAll('button');
        botones.forEach(boton => {
            boton.style.display = 'none'; // Oculta todos los botones
        });
    }
}