// Simulação de banco de dados em localStorage para usuários
const usersDB = {
    admin: { email: 'admin@app.com', senha: 'admin123', role: 'admin' },
    user: { email: 'user@app.com', senha: 'user123', role: 'user' },
    electrician: { email: 'electrician@app.com', senha: 'eletricista123', role: 'electrician' }
};

// Função para alternar entre login e registro
function toggleModal(modalId) {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    document.getElementById(modalId).classList.add('active');
}

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email in usersDB && usersDB[email].senha === senha) {
        const role = usersDB[email].role;
        sessionStorage.setItem('role', role);  // Armazena o role na sessão
        window.location.href = 'dashboard.html';  // Redireciona para o painel
    } else {
        alert('Credenciais incorretas!');
    }
});

// Registro (aqui apenas simulamos um registro, sem salvar realmente)
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso! Agora faça login.');
    toggleModal('login');
});
