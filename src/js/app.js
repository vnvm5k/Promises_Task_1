import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
