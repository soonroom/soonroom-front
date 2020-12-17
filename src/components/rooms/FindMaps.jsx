import React, { useEffect } from 'react';
import RoomList from 'Src/components/rooms/RoomList';
import { roomsCenter } from 'Static/js/roomsData';

const FindMaps = () => {
  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(36.773869, 126.932839),
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
        style: naver.maps.ZoomControlStyle.SMALL,
      },
    });
    roomsCenter.map(r => {
      new naver.maps.Polygon({
        map,
        paths: r.paths,
        fillColor: r.color,
        fillOpacity: 0.3,
        strokeColor: r.color,
        strokeOpacity: 0.6,
        strokeWeight: 3,
        clickable: true,
      }),
        new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(r.lat, r.lng),
          icon: {
            content: r.content,
            size: new naver.maps.Size(10, 35),
            anchor: new naver.maps.Point(40, 40),
          },
        });
    });
    new naver.maps.Event.addListener(map, 'click', function (e) {
      console.log(`{ lat: '${e.coord._lat}' }, lng: '${e.coord._lng}' `);
    });
    return () => {
      new naver.maps.Event.removeListener(map, 'click');
    };
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div id="map" style={{ width: '70%', height: '92.5vh', position: 'relative' }} />
      <RoomList />
    </div>
  );
};

export default FindMaps;
