import axios from 'axios';

export default ([endpoint, data]) => {
  return axios({
    method: 'POST',
    url: `https://europe-west1-order-3078b.cloudfunctions.net/sandwich${endpoint}`,
    headers: {
      type: 'application/json'
    },
    data,
    json: true
  });
};
