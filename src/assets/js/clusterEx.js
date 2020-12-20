const onLoad = () => {
  const markers = [];
  const data = rooms.firstSection;

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
    anchor: N.Point(40, 40),
  };
  const marker2 = {
    content:
      '<div style="background:#364fc7;width:70px;height:70px;opacity:0.8;cursor:pointer;line-height:70px;font-size:24px;color:white;text-align:center;font-weight:bold;"></div>',
    size: N.Size(40, 40),
    anchor: N.Point(40, 40),
  };

  // const markerClustering = new MarkerClustering({
  //   minClusterSize: 2,
  //   maxZoom: 17,
  //   map,
  //   markers,
  //   disableClickZoom: true,
  //   gridSize: 200,
  //   icons: [marker2],
  //   indexGenerator: [1],
  //   stylingFunction(clusterMarker, count) {
  //     $(clusterMarker.getElement()).find('div:first-child').text(count);
  //   },
  // });
  // console.log(markerClustering._clusters.map(c => c));
  // markerClustering._clusters.map(
  //   c =>
  //     new naver.maps.Rectangle({
  //       map,
  //       bounds: c.getBounds(),
  //       fillOpacity: 0.2,
  //       strokeOpacity: 1,
  //       strokeColor: '#00ff00',
  //       fillColor: '#00ff00',
  //     })
  // );
};
