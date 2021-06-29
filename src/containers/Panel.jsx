import styled from '@emotion/styled';
import { Button, Layout } from '../components';
import { typography } from '../typography';

export const Panel = () => {
  const data = [
    {
      name: 'Поколение к1 шлагбаум, калитка',
      buttonList: ['barrier1', 'gate1'],
    },
    {
      name: 'Поколение к2 шлагбаум, калитка',
      buttonList: ['barrier2', 'gate2'],
    },
  ];

  return (
    <Layout title="Eldes Gates">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Group key={index}>
            <h2 className={typography.h2}>{item.name}</h2>

            {item.buttonList.map((button, index) => (
              <Button key={index}>{button}</Button>
            ))}
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
