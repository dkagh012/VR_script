let viewer,
  container,
  OneItem,
  TwoItem,
  ThreeItem,
  FourItem,
  panorama1,
  panorama2,
  panorama3,
  panorama4,
  panorama5,
  panorama6,
  panorama7,
  panorama8,
  panorama9,
  panorama10,
  panorama11,
  panorama12,
  panorama13,
  panorama14,
  panorama15,
  panorama16,
  panorama17,
  panorama18,
  panorama19,
  panorama20,
  panorama21,
  panorama22,
  panorama23,
  panorama24,
  panorama25,
  panorama26,
  panorama27,
  panorama28,
  panorama29,
  panorama30,
  panorama31,
  panorama32,
  panorama33,
  panorama34,
  panorama35,
  panorama36,
  panorama37,
  panorama38,
  panorama39,
  panorama40,
  panorama41,
  panorama42,
  panorama43,
  panorama44,
  panorama45,
  panorama46,
  panorama47,
  panorama48,
  panorama49,
  panorama50,
  panorama51,
  panorama52,
  panorama53,
  panorama54,
  panorama55,
  panorama56,
  panorama57,
  panorama58,
  panorama59,
  panorama60,
  panorama61,
  panorama62,
  panorama63,
  panorama64,
  panorama65;
const panoramasData = [
  { image: "./images/1.jpg", view: [-5000.0, 171.4, 1359.04] },
  { image: "./images/2.jpg", view: [-5000.0, -21.57, -628.63] },
  { image: "./images/3.jpg", view: [-90.99, 501.3, -5000.0] },
  { image: "./images/4.jpg", view: [-90.99, 501.3, -5000.0] },
];
console.log(panoramasData);
// 이미지 첫 시작의 위치를 잡는 함수
function VR_Screen(element, x, y, z) {
  element.addEventListener("enter-fade-start", function () {
    viewer.tweenControlCenter(new THREE.Vector3(x, y, z), 0);
  });
}
// 이미지 링크
function createImagePanorama(link) {
  return new PANOLENS.ImagePanorama(link);
}

container = document.querySelector("#container");
OneItem = document.querySelector("#OneItem");
TwoItem = document.querySelector("#TwoItem");
ThreeItem = document.querySelector("#ThreeItem");
FourItem = document.querySelector("#FourItem");
let panorama_Two = createImagePanorama("./images/OneItem.jpg");
let panorama_Three = createImagePanorama("./images/TwoItem.jpg");
let panorama_Four = createImagePanorama("./images/ThreeItem.jpg");
VR_Screen(panorama_Two, 5000.0, 266.32, -84.5);
VR_Screen(panorama_Three, -5000.0, 26.47, -247.3);
VR_Screen(panorama_Four, 5000.0, 266.32, -84.5);

OneItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama1);
});
TwoItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama7);
});
ThreeItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama_Three);
});
FourItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama_Four);
});

viewer = new PANOLENS.Viewer({
  output: "console",
  container: document.querySelector("#Image"),
});

panorama1 = createImagePanorama("./images/1.jpg");
panorama2 = createImagePanorama("./images/2.jpg");
panorama3 = createImagePanorama("./images/3.jpg");
panorama4 = createImagePanorama("./images/4.jpg");
panorama5 = createImagePanorama("./images/5.jpg");
panorama6 = createImagePanorama("./images/6.jpg");
panorama7 = createImagePanorama("./images/7.jpg");
panorama8 = createImagePanorama("./images/8.jpg");
panorama9 = createImagePanorama("./images/9.jpg");
panorama10 = createImagePanorama("./images/10.jpg");
panorama11 = createImagePanorama("./images/11.jpg");
panorama12 = createImagePanorama("./images/12.jpg");
panorama13 = createImagePanorama("./images/13.jpg");
panorama14 = createImagePanorama("./images/14.jpg");
panorama15 = createImagePanorama("./images/15.jpg");
panorama16 = createImagePanorama("./images/16.jpg");
panorama17 = createImagePanorama("./images/17.jpg");
panorama18 = createImagePanorama("./images/18.jpg");
panorama19 = createImagePanorama("./images/19.jpg");
panorama20 = createImagePanorama("./images/20.jpg");
panorama21 = createImagePanorama("./images/21.jpg");
panorama22 = createImagePanorama("./images/22.jpg");
panorama23 = createImagePanorama("./images/23.jpg");
panorama24 = createImagePanorama("./images/24.jpg");
panorama25 = createImagePanorama("./images/25.jpg");
panorama26 = createImagePanorama("./images/26.jpg");
panorama27 = createImagePanorama("./images/27.jpg");
panorama28 = createImagePanorama("./images/28.jpg");
panorama29 = createImagePanorama("./images/29.jpg");
panorama30 = createImagePanorama("./images/30.jpg");
panorama31 = createImagePanorama("./images/31.jpg");
panorama32 = createImagePanorama("./images/32.jpg");
panorama33 = createImagePanorama("./images/33.jpg");
panorama34 = createImagePanorama("./images/34.jpg");
panorama35 = createImagePanorama("./images/35.jpg");
panorama36 = createImagePanorama("./images/36.jpg");
panorama37 = createImagePanorama("./images/37.jpg");
panorama38 = createImagePanorama("./images/38.jpg");
panorama39 = createImagePanorama("./images/39.jpg");
panorama40 = createImagePanorama("./images/40.jpg");
panorama41 = createImagePanorama("./images/41.jpg");
panorama42 = createImagePanorama("./images/42.jpg");
panorama43 = createImagePanorama("./images/43.jpg");
panorama44 = createImagePanorama("./images/44.jpg");
panorama45 = createImagePanorama("./images/45.jpg");
panorama46 = createImagePanorama("./images/46.jpg");
panorama47 = createImagePanorama("./images/47.jpg");
panorama48 = createImagePanorama("./images/48.jpg");
panorama49 = createImagePanorama("./images/49.jpg");
panorama50 = createImagePanorama("./images/50.jpg");
panorama51 = createImagePanorama("./images/51.jpg");
panorama52 = createImagePanorama("./images/52.jpg");
panorama53 = createImagePanorama("./images/53.jpg");
panorama54 = createImagePanorama("./images/54.jpg");
panorama55 = createImagePanorama("./images/55.jpg");
panorama56 = createImagePanorama("./images/56.jpg");
panorama57 = createImagePanorama("./images/57.jpg");
panorama58 = createImagePanorama("./images/58.jpg");
panorama59 = createImagePanorama("./images/59.jpg");
panorama60 = createImagePanorama("./images/60.jpg");
panorama61 = createImagePanorama("./images/61.jpg");
panorama62 = createImagePanorama("./images/62.jpg");
panorama63 = createImagePanorama("./images/63.jpg");
panorama64 = createImagePanorama("./images/64.jpg");
panorama65 = createImagePanorama("./images/65.jpg");

VR_Screen(panorama1, -5000.0, 171.4, 1359.04);
VR_Screen(panorama2, -5000.0, -21.57, -628.63);
VR_Screen(panorama3, -90.99, 501.3, -5000.0);
VR_Screen(panorama4, -90.99, 501.3, -5000.0);
VR_Screen(panorama5, 5000.0, 226.54, 792.3);
VR_Screen(panorama6, 5000.0, 275.83, 155.99);
VR_Screen(panorama7, 5000.0, 713.23, 8.77);
VR_Screen(panorama8, 5000.0, 31.58, -1067.45);
VR_Screen(panorama9, 4642.68, 97.43, -5000.0);
VR_Screen(panorama10, 5000.0, 105.86, 17.6);
VR_Screen(panorama11, 5000.0, 460.48, 32.99);
VR_Screen(panorama12, 432.18, 185.26, 5000.0);
VR_Screen(panorama13, 432.18, 185.26, 5000.0);
VR_Screen(panorama14, 2008.27, -48.68, 5000.0);
VR_Screen(panorama15, 5000.0, 154.8, 22.93);
VR_Screen(panorama16, 5000.0, 275.83, 155.99);
VR_Screen(panorama17, 5000.0, 149.56, -272.84);
VR_Screen(panorama18, 5000.0, -266.85, -190.33);
VR_Screen(panorama19, 5000.0, 132.84, 299.7);
VR_Screen(panorama20, 5000.0, 48.78, -1075.08);
VR_Screen(panorama21, -1816.26, -441.72, -5000.0);
VR_Screen(panorama22, -36.48, 185.13, -5000.0);
VR_Screen(panorama23, 669.5, 500.16, -5000.0);
VR_Screen(panorama24, -368.65, 421.37, -5000.0);
VR_Screen(panorama25, -5000.0, 296.9, -838.21);
VR_Screen(panorama26, -4889.6, 636.43, -5000.0);
VR_Screen(panorama27, -5000.0, 100.27, -2809.68);
VR_Screen(panorama28, -5000.0, 59.69, -1380.79);
VR_Screen(panorama29, -1606.7, -32.38, -5000.0);
VR_Screen(panorama30, 5000.0, -171.62, -1617.99);
VR_Screen(panorama31, 919.28, -257.14, -5000.0);
VR_Screen(panorama32, -5000.0, 274.13, -2542.07);
VR_Screen(panorama33, -3054.88, 348.07, 5000.0);
VR_Screen(panorama34, -18.14, 448.81, 5000.0);
VR_Screen(panorama35, -187.33, 864.27, 5000.0);
VR_Screen(panorama36, 582.29, 394.59, 5000.0);
VR_Screen(panorama37, 5000.0, 149.56, -272.84);
VR_Screen(panorama38, 5000.0, -266.85, -190.33);
VR_Screen(panorama39, -1373.03, -237.79, 5000.0);
VR_Screen(panorama40, -343.78, 333.95, -5000.0);
VR_Screen(panorama41, 5000.0, 459.49, -1854.01);
VR_Screen(panorama42, 2972.42, 290.83, 5000.0);
VR_Screen(panorama43, 3127.45, 69.82, 5000.0);
VR_Screen(panorama44, 5000.0, 162.96, 92.59);
VR_Screen(panorama45, 5000.0, 154.8, 22.93);
VR_Screen(panorama46, 5000.0, 275.83, 155.99);
VR_Screen(panorama47, 5000.0, 468.68, -1682.51);
VR_Screen(panorama48, 5000.0, -266.85, -190.33);
VR_Screen(panorama49, 5000.0, 333.68, -657.5);
VR_Screen(panorama50, 5000.0, 132.84, 299.7);
VR_Screen(panorama51, 5000.0, 386.45, -216.52);
VR_Screen(panorama52, 5000.0, 502.7, -425.98);
VR_Screen(panorama53, 5000.0, 341.59, 41.14);
VR_Screen(panorama54, -168.56, 23.2, 5000.0);
VR_Screen(panorama55, 5000.0, 154.8, 22.93);
VR_Screen(panorama56, -163.34, -8.32, 5000.0);
VR_Screen(panorama57, 5000.0, 149.56, -272.84);
VR_Screen(panorama58, -12.14, 129.45, 5000.0);
VR_Screen(panorama59, -260.78, 359.36, 5000.0);
VR_Screen(panorama60, 5000.0, 132.84, 299.7);
VR_Screen(panorama61, 5000.0, 224.25, 336.58);
VR_Screen(panorama62, -5000.0, 226.12, 1270.53);
VR_Screen(panorama63, -5000.0, 344.11, 2583.09);
VR_Screen(panorama64, -5000.0, 202.02, 998.48);
VR_Screen(panorama65, 5000.0, 274.43, 4434.38);

panorama1.link(panorama2, new THREE.Vector3(-5000.0, 45.33, -428.24));
panorama1.link(panorama65, new THREE.Vector3(-5000.0, 9.04, 3505.69));
panorama2.link(panorama3, new THREE.Vector3(-5000.0, -194.85, -597.87));
panorama3.link(panorama4, new THREE.Vector3(-218.04, 3.7, -5000.0));
panorama4.link(panorama5, new THREE.Vector3(805.35, 139.93, -5000.0));
panorama5.link(panorama6, new THREE.Vector3(5000.0, 92.27, 1519.0));
panorama6.link(panorama7, new THREE.Vector3(5000.0, 25.61, 671.68));
panorama7.link(panorama8, new THREE.Vector3(5000.0, 149.56, -272.84));
panorama8.link(panorama9, new THREE.Vector3(5000.0, 129.11, -4800.41));
panorama9.link(panorama10, new THREE.Vector3(5000.0, 129.11, -4800.41));
panorama10.link(panorama11, new THREE.Vector3(5000.0, 105.86, 17.6));
panorama11.link(panorama12, new THREE.Vector3(5000.0, -612.71, -54.24));
panorama12.link(panorama13, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama13.link(panorama14, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama14.link(panorama15, new THREE.Vector3(1793.92, -38.0, 5000.0));
panorama15.link(panorama16, new THREE.Vector3(5000.0, 154.8, 22.93));
panorama16.link(panorama17, new THREE.Vector3(5000.0, -182.81, -280.65));
panorama17.link(panorama18, new THREE.Vector3(5000.0, -271.15, 2303.48));
panorama18.link(panorama19, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama19.link(panorama20, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama20.link(panorama21, new THREE.Vector3(5000.0, -29.45, 295.07));
panorama21.link(panorama22, new THREE.Vector3(-1835.3, -552.33, -5000.0));
panorama22.link(panorama23, new THREE.Vector3(-36.48, 185.13, -5000.0));
panorama23.link(panorama24, new THREE.Vector3(1136.13, 366.26, -5000.0));
panorama24.link(panorama25, new THREE.Vector3(-368.65, 421.37, -5000.0));
panorama25.link(panorama26, new THREE.Vector3(-5000.0, -34.34, -1987.44));
panorama26.link(panorama27, new THREE.Vector3(-5000.0, -223.9, -2994.32));
panorama27.link(panorama28, new THREE.Vector3(-5000.0, 57.98, -3763.33));
panorama28.link(panorama29, new THREE.Vector3(-5000.0, -733.11, -1705.51));
panorama29.link(panorama30, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama30.link(panorama31, new THREE.Vector3(5000.0, -255.97, -1319.86));
panorama31.link(panorama32, new THREE.Vector3(4128.1, 333.48, -5000.0));
panorama32.link(panorama33, new THREE.Vector3(-5000.0, -270.98, -3646.05));
panorama33.link(panorama34, new THREE.Vector3(-2863.28, 129.34, 5000.0));
panorama34.link(panorama35, new THREE.Vector3(-18.14, 448.81, 5000.0));
panorama35.link(panorama36, new THREE.Vector3(-206.24, 649.84, 5000.0));
panorama36.link(panorama37, new THREE.Vector3(-2882.3, 145.31, 5000.0));
panorama37.link(panorama38, new THREE.Vector3(5000.0, 149.56, -272.84));
panorama38.link(panorama39, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama39.link(panorama40, new THREE.Vector3(-1373.03, -237.79, 5000.0));
panorama40.link(panorama41, new THREE.Vector3(-343.78, 333.95, -5000.0));
panorama41.link(panorama42, new THREE.Vector3(4683.19, 147.73, -5000.0));
panorama42.link(panorama43, new THREE.Vector3(1735.65, -6.42, 5000.0));
panorama43.link(panorama44, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama44.link(panorama45, new THREE.Vector3(5000.0, 162.96, 92.59));
panorama45.link(panorama46, new THREE.Vector3(5000.0, 154.8, 22.93));
panorama46.link(panorama47, new THREE.Vector3(5000.0, -182.81, -280.65));
panorama47.link(panorama48, new THREE.Vector3(5000.0, 468.68, -1682.51));
panorama48.link(panorama49, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama49.link(panorama50, new THREE.Vector3(5000.0, -16.44, -576.13));
panorama50.link(panorama51, new THREE.Vector3(5000.0, -29.45, 295.07));
panorama51.link(panorama52, new THREE.Vector3(5000.0, -36.09, -278.91));
panorama52.link(panorama53, new THREE.Vector3(5000.0, -40.97, -164.55));
panorama53.link(panorama54, new THREE.Vector3(5000.0, 29.41, 1294.16));
panorama54.link(panorama55, new THREE.Vector3(1793.92, -38.0, 5000.0));
panorama55.link(panorama56, new THREE.Vector3(5000.0, 65.27, 1201.9));
panorama56.link(panorama57, new THREE.Vector3(672.23, 20.49, 5000.0));
panorama57.link(panorama58, new THREE.Vector3(5000.0, -271.15, 2303.48));
panorama58.link(panorama59, new THREE.Vector3(-12.14, 129.45, 5000.0));
panorama59.link(panorama60, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama60.link(panorama61, new THREE.Vector3(5000.0, 22.22, -3046.47));
panorama61.link(panorama62, new THREE.Vector3(5000.0, 224.25, 336.58));
panorama62.link(panorama63, new THREE.Vector3(-5000.0, 74.24, 2350.49));
panorama63.link(panorama64, new THREE.Vector3(-5000.0, 168.39, 3181.32));
panorama64.link(panorama65, new THREE.Vector3(-5000.0, -97.96, 1272.01));
panorama65.link(panorama1, new THREE.Vector3(5000.0, 274.43, 4434.38));
panorama1.addEventListener("panolens-viewer-handler", function (event) {
  const currentPanoramaImage = event.data.src;
  if (currentPanoramaImage === "./images/2.jpg") {
    VR_Screen(panorama2, 5000.0, -21.57, -628.63);
  } else if (currentPanoramaImage === "./images/65.jpg") {
    VR_Screen(panorama1, -5000.0, 171.4, 1359.04);
  }
});

viewer.add(
  // panorama_Two,
  // panorama_Three,
  // panorama_Four,
  panorama1,
  panorama2,
  panorama3,
  panorama4,
  panorama5,
  panorama6,
  panorama7,
  panorama8,
  panorama9,
  panorama10,
  panorama11,
  panorama12,
  panorama13,
  panorama14,
  panorama15,
  panorama16,
  panorama17,
  panorama18,
  panorama19,
  panorama20,
  panorama21,
  panorama22,
  panorama23,
  panorama24,
  panorama25,
  panorama26,
  panorama27,
  panorama28,
  panorama29,
  panorama30,
  panorama31,
  panorama32,
  panorama33,
  panorama34,
  panorama35,

  // 여기 조건문
  panorama36,

  panorama37,
  panorama38,
  panorama39,

  // 여기 조건문
  panorama40,

  panorama41,
  panorama42,

  // 여기 조건문
  panorama43,

  panorama44,
  panorama45,
  panorama46,
  panorama47,
  panorama48,
  panorama49,
  panorama50,
  panorama51,
  panorama52,
  panorama53,
  panorama54,
  panorama55,
  panorama56,
  panorama57,
  panorama58,
  panorama59,
  panorama60,
  panorama61,
  panorama62,
  panorama63,
  panorama64,
  panorama65,
  panorama1
);

// 위치 먼저

// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowUp" && isDirectionInCenter(panorama2.position)) {
//     viewer.setPanorama(panorama2);
//   }
// });
// console.log(viewer.getCamera());
// function isDirectionInCenter(targetPosition) {
//   var cameraDirection = new THREE.Vector3();
//   viewer.getCamera().getWorldDirection(cameraDirection);

//   var targetDirection = new THREE.Vector3();
//   targetDirection
//     .subVectors(targetPosition, viewer.getCamera().position)
//     .normalize();
//   // console.log(targetDirection);
//   var dot = cameraDirection.dot(targetDirection);
//   return dot > 0.97;
// }
