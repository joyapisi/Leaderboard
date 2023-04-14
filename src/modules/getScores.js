const getScores = async () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLDJ7NaS4vrrLkwwbZmu/scores/')
  .then((response) => response.json());

export default getScores;
