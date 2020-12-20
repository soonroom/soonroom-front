import React from 'react';
import styled from 'styled-components';
import roomdata from 'Static/json/roomdata.json';
import RoomCard from './RoomCard';

const RoomList = () => {
  const { data } = roomdata;
  return (
    <RoomListWrap>
      {data.map(r => (
        <RoomCard key={r.id} data={r} />
      ))}
    </RoomListWrap>
  );
};

const RoomListWrap = styled.div`
  overflow: auto;
  width: 30%;
  height: 92.5vh;
  padding: 1rem;
`;

export default RoomList;
