import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Layout } from '../components';
import { typography } from '../typography';

export const Panel = () => {
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    setDeviceList(JSON.parse(localStorage.deviceList));
  }, []);

  return (
    <Layout title="Eldes Gates">
      {deviceList.length > 0 ? (
        deviceList.map((item, index) => (
          <Group key={index}>
            <h2 className={typography.h2}>{item.name}</h2>
          </Group>
        ))
      ) : (
        <div>No actions</div>
      )}
    </Layout>
  );
};

const Group = styled.div`
  margin: 3em 0;
`;
