// CONTROLLER - Partidas
function loadPartidas() {
    const partidas = partidasService.getPartidas();
    const container = document.getElementById('partidas-list');
    
    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">';
    
    partidas.forEach(partida => {
        html += `
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3>${partida.time1} vs ${partida.time2}</h3>
                <p><strong>Data:</strong> ${partida.data} ${partida.hora}</p>
                <p><strong>Grupo:</strong> ${partida.grupo}</p>
                <p><strong>Estádio:</strong> ${partida.estadio}</p>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}