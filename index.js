const topscoresTable = document.getElementById("topscoresTable");
const tablebody = document.getElementById("data-table");

fetch("TopScoresEuroCupAPI.json")
  .then(response => response.json())
  .then(data => {
    
    //tablebody.innerHTML = ''; 
    
    const artilheiros = data.competitions[0].editions.find(edition => edition.year === 2024).topScorers;

    if (artilheiros && Array.isArray(artilheiros)) {
    let row;
    artilheiros.forEach((artilheiro, index) => { 

      row = tablebody.querySelectorAll('tr')[index];

        const classificationCell = row.querySelectorAll('td')[0];
        const playerCell = row.querySelectorAll('td')[1];
        const positionCell = row.querySelectorAll('td')[2];
        const teamCell = row.querySelectorAll('td')[3];
        const countryCell = row.querySelectorAll('td')[4];
        const goalsCell = row.querySelectorAll('td')[5];
        const assistsCell = row.querySelectorAll('td')[6];
        const gamesCell = row.querySelectorAll('td')[7];

        classificationCell.textContent = artilheiro.classification;
        playerCell.textContent = artilheiro.player;
        positionCell.textContent = artilheiro.position;
        teamCell.textContent = artilheiro.team;
        countryCell.textContent = artilheiro.country;
        goalsCell.textContent = artilheiro.goals;
        assistsCell.textContent = artilheiro.assists;
        gamesCell.textContent = artilheiro.games;

    });
  } else {
    console.error("Erro: A edição de 2024 não foi encontrada no JSON ou não tem dados de artilheiros.");
  }
  })

  .catch(error => {
    console.error("Erro ao carregar dados da API:", error);
  });