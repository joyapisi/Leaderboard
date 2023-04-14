const displayScores = (data) => {
  const scoresContainer = document.getElementById('scores-container');
  scoresContainer.innerHTML = '';

  data.result.sort((first, second) => second.score - first.score);
  data.result.forEach((data) => {
    const newScore = `<h3 id=each-score> ${data.user}: ${data.score} </h3>`;
    scoresContainer.insertAdjacentHTML('beforeend', (newScore));
  });

  const scoresList = document.getElementById('scores-list');
  scoresList.replaceChild(scoresContainer, document.getElementById('scores-container'));
};
export default displayScores;