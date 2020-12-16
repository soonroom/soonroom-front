import React from 'react';
import Header from 'Src/components/common/Header';
import FindMaps from 'Src/components/rooms/FindMaps';
import RoomList from 'Src/components/rooms/RoomList';

export const Home = () => {
  return (
    <>
      <Header />
      <FindMaps />
    </>
  );
};

export default Home;
