import TheCatApiResponseJson from '../models/TheCatApiResponseJson';

export const fetchCatImage = async (): Promise<TheCatApiResponseJson> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const result = await res.json();
  return result[0];
};
