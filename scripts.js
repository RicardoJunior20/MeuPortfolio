// Seleção do formulário de contato
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Selecionar os campos do formulário
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Validar se todos os campos foram preenchidos
    if (name === '' || email === '' || message === '') {
        // Se algum campo estiver vazio, exibir mensagem de erro
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, preencha todos os campos do formulário!',
        });
    } else {
        // Se todos os campos estiverem preenchidos, exibir mensagem de sucesso
        Swal.fire({
            icon: 'success',
            title: 'Mensagem Enviada!',
            text: 'Obrigado pelo seu contato. Entrarei em contato em breve.',
            showConfirmButton: false,
            timer: 1500
        });

        // Limpar os campos do formulário após o envio
        contactForm.reset();
    }
});