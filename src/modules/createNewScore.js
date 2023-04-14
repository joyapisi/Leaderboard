const createNewScore = async (user, score) => {
  const myGame = 'My API game';
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLDJ7NaS4vrrLkwwbZmu/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: myGame,
      user,
      score,
    }),
  });
  return response.json();
};
export default createNewScore;