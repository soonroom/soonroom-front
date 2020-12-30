import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { GrSearch } from 'react-icons/gr';
import RangeSlider from '@components/common/RangeSlider';
import arrowDown from '@assets/svg/arrowDown.svg';
import arrowUp from '@assets/svg/arrowUp.svg';

const filterOptions = [
  { aircon: '에어컨' },
  { bed: '침대' },
  { desk: '책상' },
  { closet: '옷장' },
  { TV: 'TV' },
  { freeze: '냉장고' },
  { gas: '가스레인지' },
  { hightlight: '하이라이트' },
  { dryer: '건조기' },
  { internet: '인터넷' },
  { modem: '공유기' },
  { bunkBed: '2층침대' },
  { bidet: '비데' },
  { postLocker: '무인택배함' },
  { washer: '일반세탁기' },
  { drumWasher: '드럼세탁기' },
  { elevator: '엘리베이터' },
];

const Filter = () => {
  const [active, setActive] = useState({ room: false, sale: false, price: false, option: false });
  const [price, setPrice] = useState({
    month: [0, 100],
    year: [0, 1000],
    total: [0, 5000],
    LH: [0, 100],
  });
  const onMothTaxChange = values => setPrice({ ...price, month: values });
  const onYearTaxChange = values => setPrice({ ...price, yaer: values });
  const onTotalTaxChange = values => setPrice({ ...price, total: values });
  const onLHTaxChange = values => setPrice({ ...price, LH: values });
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
        <input type="text" name="keyword" placeholder="검색어를 입력해주세요" /> <GrSearch />
      </SearchBox>
      <FilterBox>
        <FilterButton className={active.room ? 'active' : ''}>
          <button type="button" name="room" onClick={openModal}>
            방종류
          </button>
          {active.room && (
            <RoomTypeModal ref={modalEl}>
              <h2>방종류</h2>
              <div>
                <input id="oneroom" type="checkbox" name="monthTax" checked />
                <label htmlFor="oneroom">원룸</label>
              </div>
              <div>
                <input id="tworoom" type="checkbox" name="yearTax" checked />
                <label htmlFor="tworoom">투룸</label>
              </div>
              <div>
                <input id="threeroom" type="checkbox" name="totalTax" checked />
                <label htmlFor="threeroom">쓰리룸</label>
              </div>
            </RoomTypeModal>
          )}
        </FilterButton>
        <FilterButton className={active.sale ? 'active' : ''}>
          <button type="button" name="sale" onClick={openModal}>
            매물종류
          </button>
          {active.sale && (
            <RentTypeModal ref={modalEl}>
              <h2>매물종류</h2>
              <div>
                <input id="monthTax" type="checkbox" name="monthTax" checked />
                <label htmlFor="mothTax">월세</label>
              </div>
              <div>
                <input id="yearTax" type="checkbox" name="yearTax" checked />
                <label htmlFor="yearTax">연세</label>
              </div>
              <div>
                <input id="totalTax" type="checkbox" name="totalTax" checked />
                <label htmlFor="totalTax">전세</label>
              </div>
              <div>
                <input id="LHTax" type="checkbox" name="LHTax" checked />
                <label htmlFor="LHTax">LH</label>
              </div>
            </RentTypeModal>
          )}
        </FilterButton>
        <FilterButton className={active.price ? 'active' : ''}>
          <button type="button" name="price" onClick={openModal}>
            가격대
          </button>
          {active.price && (
            <PriceModal ref={modalEl}>
              <div className="price-wrap">
                <div className="title-price">
                  <h2>월세</h2>
                  <div>
                    {price.month[0]}만 원 ~{' '}
                    {price.month[1] === 100 ? '무제한' : `${price.month[1]}만 원`}
                  </div>
                </div>
                <RangeSlider
                  min={0}
                  max={100}
                  step={1}
                  price={price.month}
                  onChange={onMothTaxChange}
                />
              </div>
              <div className="price-wrap">
                <div className="title-price">
                  <h2>연세</h2>
                  <div>
                    {price.year[0]}만 원 ~{' '}
                    {price.year[1] === 1000 ? '무제한' : `${price.year[1]}만 원`}
                  </div>
                </div>
                <RangeSlider
                  min={0}
                  max={1000}
                  step={1}
                  price={price.year}
                  onChange={onYearTaxChange}
                />
              </div>
              <div className="price-wrap">
                <div className="title-price">
                  <h2>전세</h2>
                  <div>
                    {price.total[0]}만 원 ~{' '}
                    {price.total[1] === 5000 ? '무제한' : `${price.total[1]}만 원`}
                  </div>
                </div>
                <RangeSlider
                  min={0}
                  max={5000}
                  step={1}
                  price={price.total}
                  onChange={onTotalTaxChange}
                />
              </div>
              <div className="price-wrap">
                <div className="title-price">
                  <h2>LH</h2>
                  <div>
                    {price.LH[0]}만 원 ~ {price.LH[1] === 100 ? '무제한' : `${price.LH[1]}만 원`}
                  </div>
                </div>
                <RangeSlider min={0} max={100} step={1} price={price.LH} onChange={onLHTaxChange} />
              </div>
            </PriceModal>
          )}
        </FilterButton>
        <FilterButton className={active.option ? 'active' : ''}>
          <button type="button" name="option" onClick={openModal}>
            옵션
          </button>
          {active.option && (
            <OptionModal ref={modalEl}>
              <h2>옵션</h2>
              <div className="option-wrap">
                {filterOptions.map((o, index) => (
                  <div key={index}>
                    <input id={Object.keys(o)} type="checkbox" name={Object.keys(o)} />
                    <label htmlFor={Object.keys(o)}>{Object.values(o)}</label>
                  </div>
                ))}
              </div>
            </OptionModal>
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
  border-radius: 0;
  border: 0px;
  border-right: 1px solid rgba(81, 99, 120, 0.3);
  align-items: center;
  input {
    width: 100%;
    border-radius: 0;
    border: 0px;
    outline: none;
    font-size: 18px;
    padding: 1.5rem;
    padding-right: 0.5rem;
  }
  input::placeholder {
    color: rgba(81, 99, 120, 0.3);
  }
  svg {
    margin-right: 1rem;
    font-size: 20px;
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
  /* input[type='checkbox'] {
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0 none;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
  } */
`;

const RoomTypeModal = styled(FilterModal)`
  width: 200px;
  div {
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 0.3rem;
  }
  input {
    height: 20px;
    width: 20px;
  }
  label {
    font-size: 16px;
  }
`;

const RentTypeModal = styled(FilterModal)`
  width: 200px;
  div {
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 0.3rem;
  }
  input {
    height: 20px;
    width: 20px;
  }
  label {
    font-size: 16px;
  }
`;

const PriceModal = styled(FilterModal)`
  width: 400px;
  .title-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1rem auto;
    h2 {
      margin: 0;
    }
  }
  .price-wrap + .price-wrap {
    margin-top: 3rem;
  }
  input {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const OptionModal = styled(FilterModal)`
  width: 400px;
  .option-wrap {
    display: flex;
    flex-wrap: wrap;
    div {
      flex: 0 0 33.33%;
      padding: 0.5rem;
    }
    input {
      margin-right: 0.3rem;
      color: ${oc.teal[5]};
      background: ${oc.teal[5]};
      background-color: ${oc.teal[5]};
    }
  }
`;

export default Filter;
