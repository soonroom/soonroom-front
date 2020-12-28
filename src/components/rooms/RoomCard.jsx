import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import defaultImg from '@assets/img/clustermarker1.png';

const RoomList = ({ data }) => {
  return (
    <RoomCardWrap>
<<<<<<< HEAD
      <div className="img-box">
        <img src={defaultImg} alt="" />
      </div>
      <div className="data-box">
        <div>이름: {data.name}</div>
        <div>에어컨: {data.is_aircon ? '있음' : '없음'}</div>
        <div>방세: {data.rent}</div>
      </div>
=======
      <div className="room-title">이름: {data.name}</div>
      <div>방세: {data.rent}</div>
      <div>전화번호: {data.is_aircon ? '있음' : '없음'}</div>
>>>>>>> 53ca7adb92508b0d7c96aab6ef3b0037e60251bf
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
<<<<<<< HEAD
  .img-box {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    img {
      height: 120px;
      width: 120px;
    }
=======
  .room-title {
    font-weight: 600;
>>>>>>> 53ca7adb92508b0d7c96aab6ef3b0037e60251bf
  }
`;

export default RoomList;
