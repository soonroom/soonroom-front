import React, { useEffect } from 'react';
import $ from 'jquery';
import RoomList from 'Src/components/rooms/RoomList';
import { accidentDeath } from './accidentdeath';
import { Cluster, MarkerClustering } from './marker-clustering';

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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
  });
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
    const markers = [];
    const data = accidentDeath.searchResult.accidentDeath;

    for (let i = 0, ii = data.length; i < ii; i++) {
      const spot = data[i];
      const latlng = new naver.maps.LatLng(spot.grd_la, spot.grd_lo);
      const marker = new naver.maps.Marker({
        position: latlng,
        draggable: true,
      });

      markers.push(marker);
    }

    const marker1 = {
      content:
        '<div style="background:#364fc7;width:70px;height:70px;border-radius:50%;opacity:0.8;cursor:pointer;line-height:70px;font-size:24px;color:white;text-align:center;font-weight:bold;"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    };

    const markerClustering = new MarkerClustering({
      minClusterSize: 3,
      maxZoom: 17,
      map,
      markers,
      disableClickZoom: true,
      gridSize: 100,
      icons: [marker1],
      indexGenerator: [10],
      stylingFunction(clusterMarker, count) {
        $(clusterMarker.getElement()).find('div:first-child').text(count);
      },
    });
    polygon1.setMap(map);
    polygon2.setMap(map);
    polygon3.setMap(map);
    polygon4.setMap(map);
    // markerClustering.setDisableClickZoom();
    markerClustering.setMap(map);
    return () => {
      new naver.maps.Event.removeListener(polygon1, 'click');
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
