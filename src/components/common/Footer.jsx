import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrap>
      <div>푸터</div>
      <Link to="instagram.com">인스타</Link>
      <Link to="fb.com">페이스북</Link>
    </FooterWrap>
  );
};

const FooterWrap = styled.div``;

export default Footer;
