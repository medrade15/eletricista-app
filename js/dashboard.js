// Função de logout
function logout() {
    alert('Você saiu do sistema.');
    sessionStorage.clear();  // Limpa a sessão
    window.location.href = 'index.html';  // Redireciona para a página de login
}

// Carrega conteúdo específico do painel baseado no tipo de usuário
document.addEventListener('DOMContentLoaded', function() {
    const userRole = sessionStorage.getItem('role');  // Supondo que o role foi salvo na sessão durante o login
    const dashboardTitle = document.getElementById('dashboard-title');
    const nav = document.getElementById('dashboard-nav');
    const content = document.getElementById('dashboard-content');

    if (userRole === 'user') {
        dashboardTitle.textContent = 'Painel do Usuário';
        nav.innerHTML = `<ul>
                            <li><a href="#" onclick="solicitarServico()">Solicitar Serviço</a></li>
                            <li><a href="#" onclick="verHistorico()">Histórico de Serviços</a></li>
                            <li><a href="#" onclick="gerenciarPerfil()">Perfil</a></li>
                            <li><a href="#" onclick="logout()">Sair</a></li>
                         </ul>`;
        content.innerHTML = `<h2>Bem-vindo ao seu painel, Usuário!</h2>
                             <p>Aqui você pode solicitar novos serviços e acompanhar o andamento dos serviços em andamento.</p>`;
    } else if (userRole === 'electrician') {
        dashboardTitle.textContent = 'Painel do Eletricista';
        nav.innerHTML = `<ul>
                            <li><a href="#" onclick="verServicosAtribuidos()">Serviços Atribuídos</a></li>
                            <li><a href="#" onclick="aceitarRecusarServicos()">Aceitar/Recusar Serviços</a></li>
                            <li><a href="#" onclick="logout()">Sair</a></li>
                         </ul>`;
        content.innerHTML = `<h2>Bem-vindo, Eletricista!</h2>
                             <p>Aqui você pode ver os serviços que foram atribuídos a você e aceitar ou recusar cada um.</p>`;
    } else if (userRole === 'admin') {
        dashboardTitle.textContent = 'Painel do Administrador';
        nav.innerHTML = `<ul>
                            <li><a href="#" onclick="gerenciarUsuarios()">Gerenciar Usuários</a></li>
                            <li><a href="#" onclick="gerenciarEletricistas()">Gerenciar Eletricistas</a></li>
                            <li><a href="#" onclick="verRelatorios()">Relatórios</a></li>
                            <li><a href="#" onclick="logout()">Sair</a></li>
                         </ul>`;
        content.innerHTML = `<h2>Bem-vindo ao Painel Administrativo</h2>
                             <p>Aqui você pode gerenciar usuários, eletricistas, e ver relatórios de desempenho.</p>`;
    } else {
        // Redireciona para o login se o role não for reconhecido
        window.location.href = 'index.html';
    }
});

// Funções específicas para cada tipo de usuário

function solicitarServico() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Solicitar Serviço</h2>
                         <form id="solicitarServicoForm">
                             <label for="servico">Tipo de Serviço:</label>
                             <select id="servico">
                                 <option value="instalacao">Instalação</option>
                                 <option value="manutencao">Manutenção</option>
                                 <option value="reparo">Reparo</option>
                             </select>
                             <label for="descricao">Descrição:</label>
                             <textarea id="descricao" placeholder="Descreva o serviço necessário"></textarea>
                             <button type="submit">Solicitar</button>
                         </form>`;
}

function verHistorico() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Histórico de Serviços</h2>
                         <p>Aqui você pode ver todos os serviços que você solicitou no passado.</p>`;
}

function gerenciarPerfil() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Perfil do Usuário</h2>
                         <p>Aqui você pode gerenciar suas informações de perfil.</p>`;
}

function verServicosAtribuidos() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Serviços Atribuídos</h2>
                         <p>Aqui estão os serviços atribuídos a você. Clique em um para ver os detalhes.</p>`;
}

function aceitarRecusarServicos() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Aceitar ou Recusar Serviços</h2>
                         <p>Aqui você pode aceitar ou recusar os serviços que foram atribuídos a você.</p>`;
}

function gerenciarUsuarios() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Gerenciar Usuários</h2>
                         <p>Aqui você pode adicionar, editar ou remover usuários.</p>`;
}

function gerenciarEletricistas() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Gerenciar Eletricistas</h2>
                         <p>Aqui você pode adicionar, editar ou remover eletricistas.</p>`;
}

function verRelatorios() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `<h2>Relatórios</h2>
                         <p>Aqui você pode ver relatórios sobre o desempenho dos serviços.</p>`;
}
