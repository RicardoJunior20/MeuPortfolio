document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

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
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
            })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensagem Enviada!',
                        text: 'Obrigado pelo seu contato. Entrarei em contato em breve.',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        contactForm.reset();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.',
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: 'Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.',
                });
            });
        }
    });
});