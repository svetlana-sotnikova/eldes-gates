import axios from 'axios';

export default ({ body, method }, res) => {
  if (method === 'POST') {
    const actionNumber = body?.actionId.replace(/^\d+/g, '');

    axios
      .post(
        `https://security.eldes.lt/api1?update=device&id=${body?.id}&key=${body?.key}`,
        `json={
          "vars" : {
            "OPN" : "${actionNumber};${body?.login}"
          }
        }`
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
