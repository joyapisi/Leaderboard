// import _ from 'lodash';
import './style.css';
import Scores from './modules/scores.js';

const AllScores = new Scores();
const addScoreBtn = document.getElementById('submit-score-btn');

addScoreBtn.addEventListener('click', () => {
  AllScores.addScores();
});
