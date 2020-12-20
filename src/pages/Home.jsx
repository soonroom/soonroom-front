import React from 'react';
import styled from 'styled-components';
import Header from '@components/common/Header';
import FindMaps from '@components/rooms/FindMaps';
import RoomList from '@components/rooms/RoomList';

export const Home = () => {
  return (
    <>
      <Header />
      <ContentsWrap>
        <FindMaps />
        <RoomList />
      </ContentsWrap>
    </>
  );
};

const ContentsWrap = styled.div`
  display: flex;
`;

export default Home;
