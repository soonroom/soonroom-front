import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const Footer = () => {
  return (
    <FooterWrap>
      <div className="link">
        <a href="www.codingdog.com">회사소개</a>
        <Link to="/terms/1">이용약관</Link>
        <Link to="/terms/2">매물관리규정</Link>
      </div>
      <div className="copyright">Copyright ⓒ 코딩독, Corp.All Rights Reserved.</div>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .link {
    a:after {
      content: '/';
      margin: 0 0.5rem;
      cursor: default;
    }
    a:last-child:after {
      content: '';
    }
  }
  .copyright {
    margin-top: 1rem;
    color: ${oc.gray[5]};
  }
`;

export default Footer;
