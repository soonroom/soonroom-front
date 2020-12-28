import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import defaultImg from '@assets/img/clustermarker1.png';

const RoomList = ({ data }) => {
  return (
    <RoomCardWrap>
      <div className="img-box">
        <img src={defaultImg} alt="" />
      </div>
      <div className="data-box">
        <div className="room-title">이름: {data.name}</div>
        <div>에어컨: {data.is_aircon ? '있음' : '없음'}</div>
        <div>방세: {data.rent}</div>
      </div>
    </RoomCardWrap>
  );
};

const RoomCardWrap = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  border: 1px solid ${oc.gray[4]};
  border-radius: 5px;
  padding: 1rem;
  & + & {
    margin-top: 1rem;
  }
  .img-box {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    img {
      height: 120px;
      width: 120px;
    }
  }
  .room-title {
    font-weight: 600;
  }
`;

export default RoomList;
