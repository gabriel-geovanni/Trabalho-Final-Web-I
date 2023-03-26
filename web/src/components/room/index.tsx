import React from 'react';
import { useUser } from '../../contexts/user';
import { mockRooms } from '../../mock';
import { Container } from './styles';

export type ISala = (typeof mockRooms)[0];

type Props = {
  item: ISala;
  selected: boolean;
  index: number;
};

const Room: React.FC<Props> = ({ item, selected, index }) => {
  const { handleSelectRoom } = useUser();
  return (
    <Container onClick={() => handleSelectRoom(item, index)} selected={selected}>
      <h1>
        {item.name} {index + 1}
      </h1>
      <p>{item.building}</p>
      <p>{item.num}</p>
    </Container>
  );
};

export default Room;
