import axios from 'axios';

export default ([endpoint, data]) => {
  // new Promise((resolve, reject) => {
  return axios({
    method: 'POST',
    url: `http://localhost:5000${endpoint}`,
    headers: {
      type: 'application/json'
    },
    data,
    json: true
  });
  //     .then(res => {
  //       resolve(res);
  //     })
  //     .catch(err => {
  //       reject(err);
  //     });
  // });
};
