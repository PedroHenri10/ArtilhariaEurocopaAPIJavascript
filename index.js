const topscoresTable = document.getElementById("topscoresTable");
const tablebody = document.getElementById("data-table");
const yearSelected = document.querySelector(".yearSelected");
const faviconLink = document.querySelector('link[rel="icon"]');
const bgbody = document.body;
const logoeuro = document.getElementById("logo-euro");
const h1 = document.querySelector("h1");
const logocampeao = document.getElementById("logo-campeao");


function updatePage(){
  let SelectedYear = parseInt(yearSelected.value);

  logoeuro.src = `src/img/logoeurocopa${SelectedYear}.png`;
  logocampeao.src = `src/img/logocampeaeuro${SelectedYear}.png`;

fetch("TopScoresEuroCupAPI.json")
  .then(response => response.json())
  .then(data => {
    
    tablebody.innerHTML = ''; 
    
    let artilheiros = data.competitions[0].editions.find(edition => edition.year === SelectedYear).topScorers;

    artilheiros.forEach((artilheiro, index) => { 

      const row = document.createElement("tr");

      const assists = artilheiro.assists !== undefined ? artilheiro.assists : "0";
      
        const classificationCell = document.createElement("td");
        const playerCell = document.createElement("td");
        const positionCell = document.createElement("td");
        const teamCell = document.createElement("td");
        const countryCell = document.createElement("td");
        const goalsCell = document.createElement("td");
        const assistsCell = document.createElement("td");
        const gamesCell = document.createElement("td");

        classificationCell.textContent = artilheiro.classification;
        playerCell.textContent = artilheiro.player;
        positionCell.textContent = artilheiro.position;
        teamCell.textContent = artilheiro.team;
        countryCell.textContent = artilheiro.country;
        goalsCell.textContent = artilheiro.goals;
        assistsCell.textContent = assists;
        gamesCell.textContent = artilheiro.games;

        row.appendChild(classificationCell);
        row.appendChild(playerCell);
        row.appendChild(positionCell);
        row.appendChild(teamCell);
        row.appendChild(countryCell);
        row.appendChild(goalsCell);
        row.appendChild(assistsCell);
        row.appendChild(gamesCell);

        tablebody.appendChild(row);
    
    });
  })
}

yearSelected.addEventListener("change", updatePage);
updatePage();

window.addEventListener("load", updatePage);