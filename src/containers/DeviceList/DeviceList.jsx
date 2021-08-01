import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components';
import { typography } from '../../typography';
import { ActionList } from './ActionList';

export const DeviceList = () => {
  const [deviceList, setDeviceList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.deviceList) {
      const deviceListTemp = JSON.parse(localStorage.deviceList);
      setDeviceList(deviceListTemp);
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <Layout title="Eldes Gates">
      {deviceList.length > 0 ? (
        deviceList.map((item, index) => (
          <Group key={index}>
            <h2 className={typography.h2}>{item.name}</h2>

            <ActionList
              id={item.id}
              deviceKey={item.key}
              userid={item.user_id}
            />
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
