// import _ from 'lodash';
import './style.css';
import fetchScores from './modules/getScores.js';
import displayScores from './modules/displayScores.js';
import createNewScore from './modules/createNewScore.js';

const submitNewScore = document.getElementById('submit-score-btn');

window.onload = async () => {
  fetchScores();
  const data = await fetchScores();
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
    await fetchScores();
    const data = await fetchScores();
    displayScores(data);
  }
});

// const AllScores = new Scores();
// const addScoreBtn = document.getElementById('submit-score-btn');

// addScoreBtn.addEventListener('click', () => {
//   AllScores.addScores();
// });
