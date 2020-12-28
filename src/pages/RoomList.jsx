import React from 'react';
import styled from 'styled-components';
import Header from '@components/common/Header';
import RoomFilter from '@components/rooms/Filter';
import FindMaps from '@components/rooms/FindMaps';
import List from '@src/components/rooms/List';

export const RoomList = () => {
  return (
    <>
      <Header />
      <ContentsWrap>
        <RoomFilter />
        <div className="content">
          <FindMaps />
          <List />
        </div>
      </ContentsWrap>
    </>
  );
};

const ContentsWrap = styled.div`
  overflow: hidden;
  .content {
    display: flex;
    height: 84.7vh;
  }
`;

export default RoomList;
