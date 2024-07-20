import { updatePage } from '/updatePage.js';
import { updateLanguage } from '/language.js';

const topscoresTable = document.getElementById("topscoresTable");
const tablebody = document.getElementById("data-table");
const yearSelected = document.querySelector(".yearSelected");
const faviconLink = document.querySelector('link[rel="icon"]');
const bgbody = document.querySelector("body");
const logoeuro = document.getElementById("logo-euro");
const h1 = document.querySelector("h1");
const logocampeao = document.getElementById("logo-campeao");
let SelectedYear = parseInt(yearSelected.value);

const languageSelect = document.getElementById("language-select");
let selectedLanguage = languageSelect.value;
const edition = document.querySelector(".label-edicao");
const player = document.querySelector(".title-header th:nth-child(2)");
const position = document.querySelector(".title-header th:nth-child(3)");
const team = document.querySelector(".title-header th:nth-child(4)");
const country = document.querySelector(".title-header th:nth-child(5)");
const goals = document.querySelector(".title-header th:nth-child(6)");
const games = document.querySelector(".title-header th:nth-child(8)");

yearSelected.addEventListener("change", () =>
  {SelectedYear = parseInt(yearSelected.value);
    updatePage();
  }); 
languageSelect.addEventListener("change", updateLanguage);

updatePage();
updateLanguage();

window.addEventListener("load", updatePage);

export { topscoresTable, tablebody, logoeuro, yearSelected, faviconLink, bgbody, h1, logocampeao, SelectedYear, 
languageSelect, edition, player, position, team, country, goals, games, selectedLanguage };