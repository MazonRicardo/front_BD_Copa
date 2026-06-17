// SERVICE - Dados mock para Partidas
const partidasService = {
    getPartidas: function() {
        return [
            {
                id: 1,
                data: "2026-06-20",
                hora: "15:00",
                grupo: "Grupo A",
                time1: "Brasil",
                time2: "França",
                estadio: "Estádio MetLife"
            },
            {
                id: 2,
                data: "2026-06-21",
                hora: "18:00",
                grupo: "Grupo B",
                time1: "Argentina",
                time2: "Alemanha",
                estadio: "Estádio SoFi"
            },
            {
                id: 3,
                data: "2026-06-22",
                hora: "12:00",
                grupo: "Grupo C",
                time1: "Espanha",
                time2: "Inglaterra",
                estadio: "Estádio AT&T"
            }
        ];
    }
};