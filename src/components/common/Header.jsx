import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <div>
          <div className="logo">
            <Link to="/">순룸</Link>
          </div>
          <div className="menu">
            <div className="menu rank">
              <Link to="/rank">랭킹</Link>
              <div className="under" />
            </div>
            <div className="menu chat">
              <Link to="/chat">채팅방</Link>
              <div className="under" />
            </div>
          </div>
        </div>
        <div>
          <Button onClick={null}>로그인</Button>
        </div>
      </HeaderInner>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
  backdrop-filter: saturate(200%) blur(20px);
  background: rgba(255, 255, 255, 0.8);
  color: black;
  box-shadow: 0 1px 1px 0 rgba(81, 99, 120, 0.2);
  z-index: 99;
`;
const HeaderInner = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  & > div {
    display: flex;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    width: 85px;
    margin-right: 100px;
    cursor: pointer;
    color: ${oc.teal[4]};
  }
  .menu {
    display: flex;
    font-size: 1.25rem;
    font-weight: 400;
    align-items: center;
    cursor: pointer;
    div + div {
      margin-left: 2rem;
    }
    .chat {
      position: relative;
      &:hover {
        .under {
          width: 100%;
        }
      }
    }
    .today {
      position: relative;
      &:hover {
        .under {
          width: 100%;
        }
      }
    }
    .rank {
      position: relative;
      &:hover {
        .under {
          width: 100%;
        }
      }
    }
    .under {
      position: absolute;
      overflow: hidden;
      top: 50px;
      height: 3px;
      width: 0;
      background: ${oc.teal[4]};
      transition: width 0.3s;
    }
  }
`;
const Button = styled.button`
  height: 35px;
  width: 75px;
  background: white;
  border: 1px solid ${oc.teal[4]};
  color: black;
  border-radius: 5px;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s;
  &:hover {
    border: 1px solid ${oc.teal[4]};
    background: ${oc.teal[4]};
    color: white;
  }
`;

export default Header;
