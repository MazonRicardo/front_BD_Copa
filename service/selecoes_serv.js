// SERVICE - Dados mock para Seleções e Jogadores
const selecoesService = {
    getSelecoes: function() {
        return [
            {
                id: 1,
                nome: "Brasil",
                bandeira: "https://flagcdn.com/w160/br.png",
                grupo: "A",
                jogadores: [
                    { nome: "Alisson", posicao: "Goleiro", numero: 1 },
                    { nome: "Marquinhos", posicao: "Zagueiro", numero: 4 },
                    { nome: "Vinicius Jr", posicao: "Atacante", numero: 7 },
                    { nome: "Rodrygo", posicao: "Atacante", numero: 10 },
                    { nome: "Endrick", posicao: "Atacante", numero: 9 }
                ]
            },
            {
                id: 2,
                nome: "Argentina",
                bandeira: "https://flagcdn.com/w160/ar.png",
                grupo: "B",
                jogadores: [
                    { nome: "Emiliano Martínez", posicao: "Goleiro", numero: 23 },
                    { nome: "Lionel Messi", posicao: "Atacante", numero: 10 },
                    { nome: "Julián Álvarez", posicao: "Atacante", numero: 9 }
                ]
            },
            {
                id: 3,
                nome: "França",
                bandeira: "https://flagcdn.com/w160/fr.png",
                grupo: "A",
                jogadores: [
                    { nome: "Kylian Mbappé", posicao: "Atacante", numero: 10 },
                    { nome: "Antoine Griezmann", posicao: "Meio-campo", numero: 7 }
                ]
            }
        ];
    }
};