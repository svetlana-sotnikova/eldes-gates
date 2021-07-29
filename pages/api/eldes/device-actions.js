import axios from 'axios';

export default ({ query, method }, res) => {
  if (method === 'GET') {
    axios
      .get('https://security.eldes.lt/api1', {
        params: { ...query, gate: 1 },
      })
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
