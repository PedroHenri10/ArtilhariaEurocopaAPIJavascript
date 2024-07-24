const openModal = document.querySelector(".open-modal");

openModal.addEventListener("click", () => {
  const modalId = openModal.getAttribute('data-modal');
  const modal = document.getElementById('modal-champion');

  modal.showModal();
});

const divGames = document.querySelector('.divGames');

fetch('campaign.json')
.then(resposta => resposta.json())
  .then(dados => {

    let campanha = data.competitions[0].editions.campaign;

    campanha.forEach( campaign => {
        let boxgame = document.createElement('div');

        divGames.appendChild(boxgame);

        boxgame.innerHTML = `
            <h2>${campaign.round}</h2>
            <span>
                <img src="src/icones/${campaign.img_champion}" alt="imagem seleção ${campaign.img_champion}"/>
                ${campaign.match}
                <img src="src/icones/${campaign.img_opponent}" alt="imagem seleção ${campaign.img_opponent}"/>
            </span>
            <h5>${campaign.stadium}</h5>
        `
    }

    )
  })