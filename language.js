import { languageSelect, h1, edition, player, position, team, country, goals, games, updateH1, SelectedYear, selectedLanguage } from './index.js';

function updateLanguage(){
    let selectedLanguage = languageSelect.value;

    if (selectedLanguage === "Pt-BR"){
        edition.textContent = "Edição";
        player.textContent = "Jogador";
        position.textContent = "Posição";
        team.textContent = "Time";
        country.textContent = "País";
        goals.textContent = "Gols"
        games.textContent = "Jogos";
    }else if (selectedLanguage === "En-UK"){
        edition.textContent = "Edition";
        player.textContent = "Player";
        position.textContent = "Position";
        team.textContent = "Team";
        country.textContent = "Country";
        goals.textContent ="Goals";
        games.textContent ="Games";
    }
    updateH1();
}

export { updateLanguage };