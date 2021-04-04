import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1, "name":"Hitman","level":10,"points":2000}}';

test('Загрузка успешна', (done) => {
  const result = new GameSaving(JSON.parse(data));
  GameSavingLoader.load().then((saveData) => {
    expect(saveData).toEqual(result);
    done();
  });
});
