import React, { useEffect } from 'react';
import RoomList from 'Src/components/rooms/RoomList';
import { roomsCenter } from 'Static/js/roomsData';

const FindMaps = () => {
  const naverMaps = window.naver.maps;
  useEffect(() => {
    const map = new naverMaps.Map('map', {
      center: new naverMaps.LatLng(36.773869, 126.932839),
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
        }),
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
    <div style={{ display: 'flex' }}>
      <div id="map" style={{ width: '70%', height: '92.5vh', position: 'relative' }} />
      <RoomList />
    </div>
  );
};

export default FindMaps;
