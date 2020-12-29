import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import arrowDown from '@assets/svg/arrowDown.svg';
import arrowUp from '@assets/svg/arrowUp.svg';

const Filter = () => {
  const [active, setActive] = useState({ room: false, sale: false, price: false, option: false });
  const modalEl = useRef();
  const openModal = e => {
    const { name } = e.target;
    setActive({ room: false, sale: false, price: false, option: false, [name]: !active[name] });
  };
  const CloseModal = e => {
    const { name } = e.target;
    if (
      (active.room || active.sale || active.price || active.option) &&
      (!modalEl.current || !modalEl.current.contains(e.target))
    )
      setActive({ room: false, sale: false, price: false, option: false, [name]: !active[name] });
  };
  useEffect(() => {
    window.addEventListener('click', CloseModal);
    return () => {
      window.removeEventListener('click', CloseModal);
    };
  }, [active]);
  return (
    <FilterWrap>
      <SearchBox>
        <input type="text" name="keyword" placeholder="검색어를 입력해주세요" />
      </SearchBox>
      <FilterBox>
        <FilterButton className={active.room ? 'active' : ''}>
          <button type="button" name="room" onClick={openModal}>
            방종류
          </button>
          {active.room && (
            <FilterModal ref={modalEl}>
              <h2>방종류</h2>
            </FilterModal>
          )}
        </FilterButton>
        <FilterButton className={active.sale ? 'active' : ''}>
          <button type="button" name="sale" onClick={openModal}>
            매물종류
          </button>
          {active.sale && (
            <FilterModal ref={modalEl}>
              <h2>매물종류</h2>
            </FilterModal>
          )}
        </FilterButton>
        <FilterButton className={active.price ? 'active' : ''}>
          <button type="button" name="price" onClick={openModal}>
            가격대
          </button>
          {active.price && (
            <FilterModal ref={modalEl}>
              <h2>가격대</h2>
            </FilterModal>
          )}
        </FilterButton>
        <FilterButton className={active.option ? 'active' : ''}>
          <button type="button" name="option" onClick={openModal}>
            옵션
          </button>
          {active.option && (
            <FilterModal ref={modalEl}>
              <h2>옵션</h2>
            </FilterModal>
          )}
        </FilterButton>
      </FilterBox>
    </FilterWrap>
  );
};

const FilterWrap = styled.div`
  display: sticky;
  width: 100vw;
  height: 70px;
  box-shadow: 0 1px 1px 0 rgba(81, 99, 120, 0.3);
  z-index: 99;
  display: flex;
`;

const SearchBox = styled.div`
  display: flex;
  flex: 0 0 20%;
  input {
    width: 100%;
    border-radius: 0;
    border: 0px;
    border-right: 1px solid rgba(81, 99, 120, 0.3);
    outline: none;
    font-size: 18px;
    padding: 2rem;
  }
  input::placeholder {
    color: rgba(81, 99, 120, 0.3);
  }
`;

const FilterBox = styled.div`
  display: flex;
  flex: 0 0 80%;
  padding: 1rem;
  align-items: center;
  .active {
    button {
      border: 1px solid ${oc.teal[5]};
      background: url(${arrowUp}) right 10px center / 10px no-repeat;
      color: ${oc.teal[5]};
    }
  }
`;

const FilterButton = styled.div`
  flex: 0 0 auto;
  position: relative;
  margin-right: 1rem;
  button {
    cursor: pointer;
    outline: none;
    width: 100%;
    padding: 0px 26px 0px 10px;
    height: 36px;
    line-height: 34px;
    text-align: left;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 3px;
    background: url(${arrowDown}) right 10px center / 10px no-repeat;
    color: rgb(34, 34, 34);
    font-size: 13px;
    font-weight: 700;
  }
`;

const FilterModal = styled.div`
  position: absolute;
  padding: 27px 30px;
  top: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 18px -10px;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  width: 320px;
  z-index: 99;
`;

export default Filter;
