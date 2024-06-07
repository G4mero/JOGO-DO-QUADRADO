document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de validação (substitua isso com sua própria lógica de autenticação)
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!'); // Aqui você pode redirecionar o usuário para outra página
        window.location.href = 'paginarestrita.html';
     
    } else {
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});


