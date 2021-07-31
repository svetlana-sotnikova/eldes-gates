import axios from 'axios';

export default ({ body, method }, res) => {
  if (method === 'POST') {
    axios
      .post(
        'https://security.eldes.lt/api1?gatelogin=1',
        `login=${body?.login}&psw=${body?.psw}`
      )
      .then((response) => {
        res.status(response.status);
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error);
        res.status(error.status || 500);
        res.json(error.data || { success: false });
      });
  } else {
    res.status(400);
    res.json({ success: false });
  }
};
