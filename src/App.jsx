import React from 'react';
import styled from 'styled-components';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

const CLIENT_ID = '9he1a0ve0h';
const App = () => {
  return (
    <MapWrap>
      <RenderAfterNavermapsLoaded
        ncpClientId={CLIENT_ID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap
          mapDivId="maps-getting-started-uncontrolled"
          style={{
            width: '100%',
            height: '85vh',
          }}
          defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
          defaultZoom={13}
        />
      </RenderAfterNavermapsLoaded>
    </MapWrap>
  );
};

const MapWrap = styled.div`
  #map {
    width: 100%;
    height: 100%;
  }
`;

export default App;
