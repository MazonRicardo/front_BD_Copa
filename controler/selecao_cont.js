// CONTROLLER - Seleções
function loadSelecoes() {
    const selecoes = selecoesService.getSelecoes();
    const container = document.getElementById('selecoes-grid');
    
    let html = '';
    
    selecoes.forEach(selecao => {
        html += `
            <div class="card" onclick="showTeamDetails(${selecao.id})">
                <img src="${selecao.bandeira}" alt="${selecao.nome}">
                <h3>${selecao.nome}</h3>
                <p>Grupo ${selecao.grupo}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function showTeamDetails(id) {
    const selecoes = selecoesService.getSelecoes();
    const selecao = selecoes.find(s => s.id === id);
    
    if (!selecao) return;
    
    document.getElementById('modal-team-name').textContent = selecao.nome;
    
    const jogadoresContainer = document.getElementById('modal-jogadores');
    let html = '';
    
    selecao.jogadores.forEach(jogador => {
        html += `
            <div class="jogador-card">
                <strong>${jogador.numero}</strong><br>
                <h4>${jogador.nome}</h4>
                <p>${jogador.posicao}</p>
            </div>
        `;
    });
    
    jogadoresContainer.innerHTML = html;
    
    document.getElementById('team-modal').style.display = 'block';
}