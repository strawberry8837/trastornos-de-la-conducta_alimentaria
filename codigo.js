// Función para mostrar un mensaje cuando alguien pide ayuda
document.addEventListener('DOMContentLoaded', () => {
    const btnAyuda = document.getElementById('btnAyuda');

    btnAyuda.addEventListener('click', () => {
        alert("Recuerda: No estás solo/a. \n\nPor favor, contacta a la línea de prevención nacional o acude al centro de salud más cercano. Tu vida es valiosa.");
        
        // Simulación de redirección a una página de contactos de emergencia
        // window.location.href = "https://www.google.com/search?q=ayuda+tca+telefono";
    });
});

// Efecto de aparición suave al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});