import GameSavingLoader from './GameSavingLoader';


GameSavingLoader.load().then((data) => data, (error) => console.log(error));
