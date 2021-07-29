import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../../components';

export const ActionList = ({ id, deviceKey: key, userid }) => {
  const [actions, setActions] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/eldes/device-actions`, {
        params: {
          gate: 1,
          id,
          key,
          userid,
        },
      })
      .then((response) => {
        setActions(response.data.names);
      })
      .catch((error) => console.error(error));
  }, []);

  return actions !== null
    ? Object.keys(actions).map((actionId, index) => (
        <Button key={index}>{actionId}</Button>
      ))
    : null;
};
