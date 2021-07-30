import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../../components';

export const ActionList = ({ id, deviceKey: key, userid }) => {
  const [actions, setActions] = useState(null);
  const [vars, setVars] = useState(null);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(JSON.parse(localStorage.login));

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

  const openAction = (actionId) => {
    axios
      .post('/api/eldes/open-action', {
        id,
        key,
        login,
        actionId,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return actions !== null && vars !== null
    ? Object.keys(actions).map((actionId, index) => {
        if (vars[actionId] === undefined) {
          return null;
        }

        return (
          <Button onClick={() => openAction(actionId)} key={index}>
            {actions[actionId]}
          </Button>
        );
      })
    : null;
};
