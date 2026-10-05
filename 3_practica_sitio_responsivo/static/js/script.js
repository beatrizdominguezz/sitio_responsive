document.addEventListener('DOMContentLoaded', () => {

    // --- INTERACCIÓN 1: Sumar "Me gusta" ---
    const btnMeGusta = document.getElementById('btn-me-gusta');
    const contadorLikes = document.getElementById('contador-likes');
    let dioLike = false;

    if (btnMeGusta && contadorLikes) {
        btnMeGusta.addEventListener('click', () => {
            if (!dioLike) {
                contadorLikes.textContent = '4,9 K';
                btnMeGusta.style.color = '#065fd4';
                dioLike = true;
            } else {
                contadorLikes.textContent = '4,8 K';
                btnMeGusta.style.color = 'inherit';
                dioLike = false;
            }
        });
    }

    // --- INTERACCIÓN 2: Suscribirse ---
    const btnSuscribirse = document.getElementById('btn-suscribirse');
    const contadorSuscriptores = document.getElementById('contador-suscriptores');

    if (btnSuscribirse && contadorSuscriptores) {
        btnSuscribirse.addEventListener('click', () => {
            if (btnSuscribirse.classList.contains('suscrito')) {
                btnSuscribirse.textContent = 'Suscribirse';
                btnSuscribirse.classList.remove('suscrito');
                contadorSuscriptores.textContent = '1,2 M de suscriptores';
            } else {
                btnSuscribirse.textContent = 'Suscrito';
                btnSuscribirse.classList.add('suscrito');
                contadorSuscriptores.textContent = '1,2 M de suscriptores (+1)';
            }
        });
    }

    // --- INTERACCIÓN 3: Añadir a la cola y mostrar alerta ---
    const alertaNotificacion = document.getElementById('alerta-notificacion');
    const btnCerrarAlerta = document.getElementById('btn-cerrar-alerta');
    const botonesAnadir = document.querySelectorAll('.btn-anadir-cola-item, #btn-anadir-principal');

    const mostrarAlerta = () => {
        if (alertaNotificacion) {
            alertaNotificacion.classList.remove('oculta');
            setTimeout(() => {
                alertaNotificacion.classList.add('oculta');
            }, 3000);
        }
    };

    botonesAnadir.forEach(boton => {
        boton.addEventListener('click', mostrarAlerta);
    });

    if (btnCerrarAlerta) {
        btnCerrarAlerta.addEventListener('click', () => {
            alertaNotificacion.classList.add('oculta');
        });
    }

    // Limpiar cola
    const btnLimpiarCola = document.getElementById('btn-limpiar-cola');
    const contenedorCola = document.getElementById('contenedor-cola');

    if (btnLimpiarCola && contenedorCola) {
        btnLimpiarCola.addEventListener('click', () => {
            contenedorCola.innerHTML = '<p style="font-size:0.8rem; color:#606060;">La cola está vacía.</p>';
        });
    }

    // --- INTERACCIÓN 4: Reproducir video al pasar el mouse ---
    const contenedoresMiniaturas = document.querySelectorAll('.miniatura-contenedor');

    contenedoresMiniaturas.forEach(contenedor => {
        const video = contenedor.querySelector('.miniatura-video');

        if (video) {
            contenedor.addEventListener('mouseenter', () => {
                video.play().catch(() => {}); // Reproduce sin sonido
            });

            contenedor.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // Vuelve al inicio al salir
            });
        }
    });

});