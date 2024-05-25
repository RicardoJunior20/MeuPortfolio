// Seleção do formulário de contato
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Aqui você pode adicionar código para enviar os dados do formulário para o servidor

    // Exibe uma mensagem de sucesso (usando SweetAlert2)
    Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Obrigado pelo seu contato. Entraremos em contato em breve.',
        showConfirmButton: false,
        timer: 1500
    });

    // Limpa o formulário
    contactForm.reset();
});
