import jsonData from './data.json';
import { string } from '../asset/string/string_fr';

const { error_fetch_dataById } = string;

export const getData = async () => (
  new Promise((resolve) => {
    setTimeout(() => resolve(jsonData), Math.random()* 3000);
  })
);

export const getDataById = async (id) => {
  const dataById = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const data =  jsonData[jsonData.findIndex((element) => element.id === id)];
      resolve(data);
    }, Math.random()* 3000);
  });

  if (!dataById) {
    throw new Error(error_fetch_dataById);
  }
  return dataById;
};
