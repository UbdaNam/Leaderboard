import './style.css';
import postData from './modules/postData.js';
import getData from './modules/getData.js';
import renderList from './modules/renderList.js';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const newGame = {
  name: 'Basket Ball',
};

(async () => {
  const successEl = document.querySelector('h5');
  // Create new Game
  const idResponse = await postData(baseURL, newGame);
  const Id = idResponse.result.split(' ')[3];
  const myGameURL = `${baseURL}/${Id}/scores/`;
  // Render List
  const refreshBtn = document.querySelector('.refreshBtn');
  refreshBtn.addEventListener('click', async () => {
    const response = await getData(myGameURL);
    const scores = response.result;
    renderList(scores);
    successEl.textContent = '';
  });

  // Add score
  const nameInputEl = document.getElementById('name');
  const scoreInputEl = document.getElementById('score');
  const addButton = document.querySelector('.submit');

  addButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const newScore = {
      user: nameInputEl.value,
      score: scoreInputEl.value,
    };
    const addResponse = await postData(myGameURL, newScore);
    const success = addResponse.result;
    successEl.textContent = success;
  });
})();
