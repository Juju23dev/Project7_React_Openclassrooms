import jsonData from './data.json';

export const getData = new Promise((resolve, reject) => {
  setTimeout(() => reject(jsonData), Math.random()* 3000)
});

export const getDataById = async (id) => {
  const dataById = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const data =  jsonData[jsonData.findIndex((element) => element.id === id)] 
      resolve(data)
    }, Math.random()* 3000)
  });

  if (!dataById) {
    throw new Error('data whith this id don\'t exist')
  }
  return dataById;
};
