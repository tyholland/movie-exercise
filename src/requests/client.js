import axios from 'axios';

export const client = async (url, method) => {
  const options = {
    method,
    url
  };

  const response = await axios(options);

  return response.data;
};
