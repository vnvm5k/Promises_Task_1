import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then((data) => {
  const {
    id,
    created,
    userInfo: {
      id: userId,
      name: userName,
      level: userLevel,
      points: userPoints,
    },
  } = JSON.parse(data);
  const gameSaving = new GameSaving(id, created, {
    userId, userName, userLevel, userPoints,
  });
  return gameSaving;
});
