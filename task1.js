const axios = require('axios');

let getUrl = 'http://ptsv2.com/t/candidateGetsCredentials/post';

function getCredentialsResponse() {
  return axios.get(getUrl)
    .catch(error => {
      console.log('get credential request failed with the error: ', error);
    });
};

async function getFinalResponse() {
  const { data } = await getCredentialsResponse()

  return await axios({
      method: 'post',
      url: data.targetUrl,
      auth: {
        username: data.username,
        password: data.password
      }
    }).catch (error => {
      console.log('"post" failed with the error: ', error);
    });
};

getCredentialsResponse().then(({data}) => console.log(data));
getFinalResponse().then(({data}) => console.log(data));

module.exports = { getCredentialsResponse, getFinalResponse };
