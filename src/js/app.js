// TODO: write your code here
import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    const data = read(); 
    data.then(data => {
    	return new Promise((resolve, reject) => {
    		setTimeout(() => {
    			const value = json(data);
    			resolve(value)
    		}, 1000)
    	})
    }).then(modifiedData => {

    	return {
		  "id": modifiedData.id, // id сохранения
		  "created": modifiedData.created, // timestamp создания
		  "userInfo": modifiedData.userInfo
		}
    }).catch(err => console.error('Error:', err))

  }
}




