import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../../components';

export const ActionList = ({ id, deviceKey: key, userid }) => {
  const [actions, setActions] = useState(null);
  const [vars, setVars] = useState(null);

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
        setVars(response.data.vars);
      })
      .catch((error) => console.error(error));
  }, []);

  return actions !== null && vars !== null
    ? Object.keys(actions).map((actionId, index) => {
        if (vars[actionId] === undefined) {
          return null;
        }

        return <Button key={index}>{actions[actionId]}</Button>;
      })
    : null;
};
