import { useContext, useState } from 'react';
import styled from 'styled-components';

import { AuthenticationContext } from 'components/AuthenticationContext';
import { toArray } from 'utils';
import NewRoomDialog from 'components/NewRoomDialog';
import RoomPortal from 'components/RoomPortal';

export default function Dashboard() {
  const { userRooms } = useContext(AuthenticationContext);

  const [openDialog, setOpenDialog] = useState(false);

  const configureNewRoom = () => setOpenDialog(true);

  return (
    <Wrapper>
      <Add onClick={configureNewRoom}>Add +</Add>
      {userRooms &&
        toArray(userRooms).map(([roomID, roomDetails]) => (
          <RoomPortal key={roomID} roomID={roomID} roomDetails={roomDetails} />
        ))}
      <NewRoomDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: var(--main-height-padding) var(--main-width-padding);
`;

const Add = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--portal-height);
  width: var(--portal-width);
  margin-bottom: var(--portal-gap);
  margin-right: var(--portal-gap);
  border-radius: var(--portal-border-radius);
  color: var(--light-green);
  font-size: 28px;
  font-weight: bold;
  border: 5px dashed var(--light-green);
  cursor: pointer;
`;
