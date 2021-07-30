import axios from 'axios';

export default ({ body, method }, res) => {
  if (method === 'POST') {
    axios
      .post(
        'https://security.eldes.lt/api1?update=device',
        `id=${body?.id}&key=${body?.key}`,
        {
          headers: {
            Host: 'security.eldes.lt',
          },
        }
      )
      .then((response) => {
        res.status(response.status);
        res.send(response.data);
      })
      .catch((error) => {
        console.error(error);
        res.status(error.status || 500);
        res.send(error.data || { success: false });
      });
  } else {
    res.status(400);
    res.json({ success: false });
  }
};
