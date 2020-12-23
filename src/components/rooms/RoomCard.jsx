import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const RoomList = ({ data }) => {
  return (
    <RoomCardWrap>
      <div className="room-title">이름: {data.name}</div>
      <div>방세: {data.rent}</div>
      <div>전화번호: {data.is_aircon ? '있음' : '없음'}</div>
    </RoomCardWrap>
  );
};

const RoomCardWrap = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid ${oc.gray[4]};
  border-radius: 5px;
  padding: 1rem;
  & + & {
    margin-top: 1rem;
  }
  .room-title {
    font-weight: 600;
  }
`;

export default RoomList;
