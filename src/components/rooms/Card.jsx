import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import defaultImg from '@assets/img/placeholder.png';

const RoomList = ({ data }) => {
  return (
    <RoomCardWrap>
      <div className="img-box">
        <Link to={`/room/${data.id}`}>
          <img src={defaultImg} alt="" />
        </Link>
      </div>
      <div className="data-box">
        <div className="room-rent">
          연세({data.rent.year}) 월세({data.rent.month})
        </div>
        <div>
          <Link to={`/room/${data.id}`}>
            <span className="room-title">{data.name}</span>
          </Link>
          <span>
            {data.room.roomCount === 1 && '원룸'}
            {data.room.roomCount === 2 && '투룸'}
            {data.room.roomCount === 3 && '쓰리룸'}({data.room.squareFeet}평)
          </span>
        </div>
        <div>{data.call}</div>
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
      object-fit: cover;
    }
  }
  .room-title {
    font-weight: 600;
    font-size: 24px;
    margin-right: 0.5rem;
  }
  .room-rent {
    font-size: 16px;
  }
`;

export default RoomList;
