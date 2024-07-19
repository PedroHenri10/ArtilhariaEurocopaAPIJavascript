import {h1} from "./index.js";

const languageSelect = document.getElementById("language-select");
const edition = document.querySelector(".label-edicao");
const player = document.querySelector(".title-header th:nth-child(2)");
const position = document.querySelector(".title-header th:nth-child(3)");
const team = document.querySelector(".title-header th:nth-child(4)");
const country = document.querySelector(".title-header th:nth-child(5)");
const goals = document.querySelector(".title-header th:nth-child(6)");
const games = document.querySelector(".title-header th:nth-child(8)");

function updateLanguage(){
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage === "Pt-BR"){
        h1.textContent = "Artilheiros Eurocopa 2024";
        edition.textContent = "Edição";
        player.textContent = "Jogador";
        position.textContent = "Posição";
        team.textContent = "Time";
        country.textContent = "País";
        goals.textContent = "Gols"
        games.textContent = "Jogos";
    }else if (selectedLanguage === "En-UK"){
        h1.textContent = "Euro Cup Top Scorers 2024";
        edition.textContent = "Edition";
        player.textContent = "Player";
        position.textContent = "Position";
        team.textContent = "Team";
        country.textContent = "Country";
        goals.textContent ="Goals";
        games.textContent ="Games";
    }
}

languageSelect.addEventListener("change", updateLanguage);
updateLanguage();