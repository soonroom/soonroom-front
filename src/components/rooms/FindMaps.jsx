import React, { useEffect } from 'react';
import styled from 'styled-components';
import { roomsCenter } from '@assets/js/roomsData';

const FindMaps = () => {
  const naverMaps = window.naver.maps;
  useEffect(() => {
    const map = new naverMaps.Map('map', {
      center: new naverMaps.LatLng(36.774869, 126.932839),
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naverMaps.Position.TOP_RIGHT,
        style: naverMaps.ZoomControlStyle.SMALL,
      },
    });
    roomsCenter.map(
      r =>
        new naverMaps.Polygon({
          map,
          paths: r.paths,
          fillColor: r.color,
          fillOpacity: 0.3,
          strokeColor: r.color,
          strokeOpacity: 0.6,
          strokeWeight: 3,
          clickable: true,
        })
    );
    roomsCenter.map(
      r =>
        new naverMaps.Marker({
          map,
          position: new naverMaps.LatLng(r.lat, r.lng),
          icon: {
            content: r.content,
            size: new naverMaps.Size(10, 35),
            anchor: new naverMaps.Point(40, 40),
          },
        })
    );
    naverMaps.Event.addListener(map, 'click', e => {
      console.log(`{ lat: '${e.coord._lat}' }, lng: '${e.coord._lng}' `);
    });
    return () => {
      naverMaps.Event.removeListener(map, 'click');
    };
  }, []);
  return (
    <MapWrap>
      <div id="map" />
    </MapWrap>
  );
};

const MapWrap = styled.div`
  margin-top: 0.1vh;
  width: 70vw;
  #map {
    height: 100%;
  }
`;

export default FindMaps;
