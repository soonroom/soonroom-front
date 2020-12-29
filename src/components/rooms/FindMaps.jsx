import React, { useEffect } from 'react';
import styled from 'styled-components';
import { rooms, roomsCenter } from '@assets/js/roomsData';

const FindMaps = () => {
  const naverMaps = window.naver.maps;
  const polygonObj = [];
  const markerObj = [];
  const sectorMarker = [];
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
    const defaultCenter = map.getCenter();
    roomsCenter.map(r =>
      polygonObj.push(
        new naverMaps.Polygon({
          map,
          paths: r.paths,
          fillColor: r.color,
          fillOpacity: 0,
          strokeColor: r.color,
          strokeOpacity: 0,
          strokeWeight: 3,
          clickable: true,
        })
      )
    );
    roomsCenter.map(r =>
      markerObj.push(
        new naverMaps.Marker({
          map,
          position: new naverMaps.LatLng(r.lat, r.lng),
          icon: {
            content: r.content,
            size: new naverMaps.Size(10, 35),
            anchor: new naverMaps.Point(40, 40),
          },
        })
      )
    );
    let sector;
    markerObj.map(
      (m, index) => (
        naverMaps.Event.addListener(m, 'mouseover', e =>
          polygonObj[index].setOptions({ fillOpacity: 0.3, strokeOpacity: 0.8 })
        ),
        naverMaps.Event.addListener(m, 'mouseout', e =>
          polygonObj[index].setOptions({ fillOpacity: 0, strokeOpacity: 0 })
        ),
        naverMaps.Event.addListener(m, 'click', e => {
          sector = index;
          map.zoomBy(1, m.position);
        })
      )
    );
    naverMaps.Event.addListener(map, 'zoom_changed', zoom => {
      const zoomlevel = zoom;
      if (zoomlevel > 16) {
        markerObj.map(m => m.setVisible(false));
        rooms[sector].map(r =>
          sectorMarker.push(
            new naverMaps.Marker({
              map,
              position: new naverMaps.LatLng(r.lat, r.lng),
            })
          )
        );
      }
      if (zoomlevel < 17) {
        markerObj.map(m => m.setVisible(true));
        sectorMarker.map(m => m.setMap(null));
      }
    });
    return () => {
      polygonObj.map(p => naverMaps.Event.removeListener(p, 'click'));
      markerObj.map(m => naverMaps.Event.removeListener(m, 'mouseover'));
      markerObj.map(m => naverMaps.Event.removeListener(m, 'mouseout'));
      markerObj.map(m => naverMaps.Event.removeListener(m, 'click'));
      naverMaps.Event.removeListener(map, 'zoom_changed');
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
