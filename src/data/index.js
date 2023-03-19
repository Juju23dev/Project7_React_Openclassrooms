import jsonData from './data.json'

export const data = jsonData;

export const getContentById = (id) => (
  data[data.findIndex((element) => element.id === id)]
);

export const isIdValid = (id) => data.some((element) => element.id === id)