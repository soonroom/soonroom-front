import React, { useEffect } from 'react';
import RoomList from 'Src/components/rooms/RoomList';

const FindMaps = () => {
  const polygon1 = new naver.maps.Polygon({
    paths: [
      [
        new naver.maps.LatLng(36.774797, 126.93256),
        new naver.maps.LatLng(36.771498, 126.929917),
        new naver.maps.LatLng(36.771581, 126.931832),
        new naver.maps.LatLng(36.77346, 126.933539),
        new naver.maps.LatLng(36.774206, 126.933056),
      ],
    ],
    fillColor: 'red',
    fillOpacity: 0.3,
    strokeColor: 'red',
    strokeOpacity: 0.6,
    strokeWeight: 3,
  });
  const polygon2 = new naver.maps.Polygon({
    paths: [
      [
        new naver.maps.LatLng(36.774866, 126.93241),
        new naver.maps.LatLng(36.772993, 126.930822),
        new naver.maps.LatLng(36.771824, 126.929792),
        new naver.maps.LatLng(36.770741, 126.928655),
        new naver.maps.LatLng(36.777125, 126.928418),
      ],
    ],
    fillColor: 'orange',
    fillOpacity: 0.3,
    strokeColor: 'orange',
    strokeOpacity: 0.6,
    strokeWeight: 3,
  });
  const polygon3 = new naver.maps.Polygon({
    paths: [
      [
        new naver.maps.LatLng(36.774866, 126.93241),
        new naver.maps.LatLng(36.777125, 126.928418),
        new naver.maps.LatLng(36.780836, 126.932024),
        new naver.maps.LatLng(36.780894, 126.935561),
        new naver.maps.LatLng(36.778003, 126.935476),
      ],
    ],
    fillColor: 'blue',
    fillOpacity: 0.3,
    strokeColor: 'blue',
    strokeOpacity: 0.6,
    strokeWeight: 3,
  });
  const polygon4 = new naver.maps.Polygon({
    paths: [
      [
        new naver.maps.LatLng(36.774833, 126.932625),
        new naver.maps.LatLng(36.777066, 126.93477),
        new naver.maps.LatLng(36.778475, 126.936938),
        new naver.maps.LatLng(36.777891, 126.938161),
        new naver.maps.LatLng(36.769847, 126.937474),
        new naver.maps.LatLng(36.771325, 126.936036),
        new naver.maps.LatLng(36.772254, 126.934749),
      ],
    ],
    fillColor: 'purple',
    fillOpacity: 0.3,
    strokeColor: 'purple',
    strokeOpacity: 0.6,
    strokeWeight: 3,
  });
  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(36.773869, 126.932839),
      zoom: 16,
    });
    polygon1.setMap(map);
    polygon2.setMap(map);
    polygon3.setMap(map);
    polygon4.setMap(map);
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div id="map" style={{ width: '70%', height: '92.5vh' }} />
      <RoomList />
    </div>
  );
};

export default FindMaps;
