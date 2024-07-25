import { SelectedYear } from "./index.js";

const openModal = document.querySelector(".open-modal");

openModal.addEventListener("click", () => {
  const modalId = openModal.getAttribute('data-modal');
  const modal = document.getElementById('modal-champion');

  modal.showModal();
});

const divGames = document.querySelector('.divGames');

fetch("campaign.json")
  .then(response => response.json())
  .then(data => {

    let campanha = data.competitions[0].editions.find(edition => edition.year === SelectedYear).campaign;

    campanha.forEach( campaign => {
        let boxgame = document.createElement('div');

        divGames.appendChild(boxgame);

        boxgame.innerHTML = `
            <h3 class="match">${campaign.round}</h3>
            <span class="match">
                <img src="src/icones/${campaign.champion}.png" class"flag-campaign" alt="imagem seleção ${campaign.champion}"/>
                ${campaign.goals_champions}
                ${campaign.match}
                ${campaign.goals_opponent}
                <img src="src/icones/${campaign.opponent}.png" class"flag-campaign" alt="imagem seleção ${campaign.opponent}"/>
            </span>
            <h5>${campaign.stadium}</h5>
        `
    }

    )
  })