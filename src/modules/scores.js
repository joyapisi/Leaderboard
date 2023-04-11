export default class Scores {
  constructor() {
    this.scoresList = document.getElementById('scores-list');
    this.name = document.getElementById('name');
    this.score = document.getElementById('score');
    this.scoresArray = [];
    if (localStorage.getItem('ScoresStorage')) {
      this.scoresArray = JSON.parse(localStorage.getItem('ScoresStorage'));
      this.displayScores();
    }
  }
}