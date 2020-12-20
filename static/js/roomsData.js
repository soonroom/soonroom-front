export const rooms = {
  firstSection: [
    // 1 Section
    { lat: 126.9316803, lng: 36.7732588 },
    { lat: 126.9319163, lng: 36.7735682 },
    { lat: 126.9322811, lng: 36.7734823 },
    { lat: 126.932088, lng: 36.7731557 },
    { lat: 126.9326244, lng: 36.7729151 },
    { lat: 126.9327746, lng: 36.7732588 },
    { lat: 126.9331394, lng: 36.7734479 },
    { lat: 126.9326459, lng: 36.7738604 },
    // 2 Section
  ],
  secondSection: [
    { lat: 126.9321845, lng: 36.774737 },
    { lat: 126.931927, lng: 36.7744448 },
    { lat: 126.9317554, lng: 36.7742901 },
    { lat: 126.9314764, lng: 36.773912 },
    { lat: 126.9313691, lng: 36.7737401 },
    { lat: 126.9310902, lng: 36.7734823 },
    { lat: 126.9308542, lng: 36.7731041 },
    { lat: 126.9305323, lng: 36.7728979 },
    { lat: 126.9303606, lng: 36.7726573 },
    { lat: 126.9305108, lng: 36.7737917 },
    { lat: 126.9310473, lng: 36.773912 },
    { lat: 126.93094, lng: 36.7736713 },
    { lat: 126.9313691, lng: 36.7744276 },
    { lat: 126.9318198, lng: 36.7744448 },
    { lat: 126.9317983, lng: 36.7748057 },
  ],
  thirdSection: [
    // 3 Section
    { lat: 126.9325064, lng: 36.7751667 },
    { lat: 126.9328068, lng: 36.7755104 },
    { lat: 126.9330643, lng: 36.775837 },
    { lat: 126.9333647, lng: 36.7761635 },
    { lat: 126.9328926, lng: 36.7763354 },
    { lat: 126.9326566, lng: 36.7760948 },
    { lat: 126.9326566, lng: 36.7757338 },
    { lat: 126.9322918, lng: 36.7753385 },
    { lat: 126.9336866, lng: 36.7765416 },
    { lat: 126.9335149, lng: 36.7766791 },
    { lat: 126.9336651, lng: 36.7770229 },
    { lat: 126.9340943, lng: 36.7770057 },
    { lat: 126.9343303, lng: 36.7771776 },
    { lat: 126.9338153, lng: 36.7772635 },
    { lat: 126.9329141, lng: 36.7768682 },
    { lat: 126.9329785, lng: 36.7771432 },
  ],
  fourSection: [
    // 4 Section
    { lat: 126.9330858, lng: 36.7748057 },
    { lat: 126.9332574, lng: 36.7749948 },
    { lat: 126.9335793, lng: 36.7745479 },
    { lat: 126.9334076, lng: 36.7741182 },
    { lat: 126.9337295, lng: 36.7737057 },
    { lat: 126.9340514, lng: 36.7742901 },
    { lat: 126.9341372, lng: 36.7738604 },
    { lat: 126.9344161, lng: 36.7734651 },
    { lat: 126.9342016, lng: 36.7731901 },
    { lat: 126.9345663, lng: 36.7728463 },
    { lat: 126.9349097, lng: 36.7730182 },
    { lat: 126.9352744, lng: 36.7727432 },
    { lat: 126.935489, lng: 36.7723823 },
    { lat: 126.935017, lng: 36.7723307 },
    { lat: 126.9352315, lng: 36.7722104 },
    { lat: 126.9356178, lng: 36.7721244 },
  ],
};

const naverMaps = window.naver.maps;
export const roomsCenter = [
  {
    lat: 36.7729495,
    lng: 126.932206,
    content: `<div style="background:#364fc7;width:70px;height:70px;border-radius:50%;opacity:0.8;cursor:pointer;line-height:70px;font-size:24px;color:white;text-align:center;font-weight:bold;">${rooms.firstSection.length}</div>`,
    paths: [
      new naverMaps.LatLng(36.774797, 126.93256),
      new naverMaps.LatLng(36.771498, 126.929917),
      new naverMaps.LatLng(36.771581, 126.931832),
      new naverMaps.LatLng(36.77346, 126.933539),
      new naverMaps.LatLng(36.774206, 126.933056),
    ],
    color: 'red',
  },
  {
    lat: 36.7742385,
    lng: 126.9301031,
    content: `<div style="background:#364fc7;width:70px;height:70px;border-radius:50%;opacity:0.8;cursor:pointer;line-height:70px;font-size:24px;color:white;text-align:center;font-weight:bold;">${rooms.secondSection.length}</div>`,
    paths: [
      new naverMaps.LatLng(36.774866, 126.93241),
      new naverMaps.LatLng(36.772993, 126.930822),
      new naverMaps.LatLng(36.771824, 126.929792),
      new naverMaps.LatLng(36.770741, 126.928655),
      new naverMaps.LatLng(36.777125, 126.928418),
    ],
    color: 'orange',
  },
  {
    lat: 36.7781228,
    lng: 126.9326781,
    content: `<div style="background:#364fc7;width:70px;height:70px;border-radius:50%;opacity:0.8;cursor:pointer;line-height:70px;font-size:24px;color:white;text-align:center;font-weight:bold;">${rooms.thirdSection.length}</div>`,
    paths: [
      new naverMaps.LatLng(36.774866, 126.93241),
      new naverMaps.LatLng(36.777125, 126.928418),
      new naverMaps.LatLng(36.780836, 126.932024),
      new naverMaps.LatLng(36.780894, 126.935561),
      new naverMaps.LatLng(36.778003, 126.935476),
    ],
    color: 'blue',
  },
  {
    lat: 36.7749432,
    lng: 126.935768,
    content: `<div style="background:#364fc7;width:70px;height:70px;border-radius:50%;opacity:0.8;cursor:pointer;line-height:70px;font-size:24px;color:white;text-align:center;font-weight:bold;">${rooms.fourSection.length}</div>`,
    paths: [
      new naverMaps.LatLng(36.774833, 126.932625),
      new naverMaps.LatLng(36.777066, 126.93477),
      new naverMaps.LatLng(36.778475, 126.936938),
      new naverMaps.LatLng(36.777891, 126.938161),
      new naverMaps.LatLng(36.769847, 126.937474),
      new naverMaps.LatLng(36.771325, 126.936036),
      new naverMaps.LatLng(36.772254, 126.934749),
    ],
    color: 'purple',
  },
];
