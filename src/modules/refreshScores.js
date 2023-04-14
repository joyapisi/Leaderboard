// /* eslint-disable no-restricted-globals */
import displayScores from './displayScores.js';
import getScores from './getScores.js';
// acquire scores after refresh
const refresh = () => {
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', async () => {
    window.location.reload();
    const data = await getScores();
    displayScores(data);
  });
};
export default refresh;
