import './style.css';
import getScores from './modules/getScores.js';
import displayScores from './modules/displayScores.js';
import createNewScore from './modules/createNewScore.js';

const submitNewScore = document.getElementById('submit-score-btn');
const refreshBtn = document.getElementById('refresh-btn');

window.onload = async () => {
  getScores();
  const data = await getScores();
  displayScores(data);
};

submitNewScore.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  if (user.value && score.value) {
    await createNewScore(user.value, score.value);
    user.value = '';
    score.value = '';
    await getScores();
    const data = await getScores();
    displayScores(data);
  }
});

refreshBtn.addEventListener('click', async () => {
  window.location.reload();
  const data = await getScores();
  displayScores(data);
});
