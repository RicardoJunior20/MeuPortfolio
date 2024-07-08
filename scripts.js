document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Código de validação e envio do formulário de contato
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name === '' || email === '' || message === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, preencha todos os campos do formulário!',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Mensagem Enviada!',
                text: 'Obrigado pelo seu contato. Entrarei em contato em breve.',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                // Enviar o formulário programaticamente
                contactForm.submit();
            });
        }
    });
});