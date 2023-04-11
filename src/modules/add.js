import ScoresClass from './scoresClass.js';

const addScores = () => {
  const name = this.name.value;
  const score = this.score.value;
  const marksScored = new ScoresClass(name, score);
  this.scoresArray.push(marksScored);
  this.scoresDisplay();
  this.saveToLocalStorage();
  this.name.value = '';
  this.score.value = '';
};

export default addScores();