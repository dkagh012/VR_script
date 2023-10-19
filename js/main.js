let viewer, container, OneItem, TwoItem, ThreeItem, FourItem;

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

let panorama1 = createImagePanorama("./images/1.jpg");
let panorama2 = createImagePanorama("./images/2.jpg");
let panorama3 = createImagePanorama("./images/3.jpg");
let panorama4 = createImagePanorama("./images/4.jpg");
let panorama5 = createImagePanorama("./images/5.jpg");
let panorama6 = createImagePanorama("./images/6.jpg");
let panorama7 = createImagePanorama("./images/7.jpg");
let panorama8 = createImagePanorama("./images/8.jpg");
let panorama9 = createImagePanorama("./images/9.jpg");
let panorama10 = createImagePanorama("./images/10.jpg");
let panorama11 = createImagePanorama("./images/11.jpg");
let panorama12 = createImagePanorama("./images/12.jpg");
let panorama13 = createImagePanorama("./images/13.jpg");
let panorama14 = createImagePanorama("./images/14.jpg");
let panorama15 = createImagePanorama("./images/15.jpg");
let panorama16 = createImagePanorama("./images/16.jpg");
let panorama17 = createImagePanorama("./images/17.jpg");
let panorama18 = createImagePanorama("./images/18.jpg");
let panorama19 = createImagePanorama("./images/19.jpg");
let panorama20 = createImagePanorama("./images/20.jpg");
let panorama21 = createImagePanorama("./images/21.jpg");
let panorama22 = createImagePanorama("./images/22.jpg");
let panorama23 = createImagePanorama("./images/23.jpg");
let panorama24 = createImagePanorama("./images/24.jpg");
let panorama25 = createImagePanorama("./images/25.jpg");
let panorama26 = createImagePanorama("./images/26.jpg");
let panorama27 = createImagePanorama("./images/27.jpg");
let panorama28 = createImagePanorama("./images/28.jpg");
let panorama29 = createImagePanorama("./images/29.jpg");
let panorama30 = createImagePanorama("./images/30.jpg");
let panorama31 = createImagePanorama("./images/31.jpg");
let panorama32 = createImagePanorama("./images/32.jpg");
let panorama33 = createImagePanorama("./images/33.jpg");
let panorama34 = createImagePanorama("./images/34.jpg");
let panorama35 = createImagePanorama("./images/35.jpg");
let panorama36 = createImagePanorama("./images/36.jpg");
let panorama37 = createImagePanorama("./images/37.jpg");
let panorama38 = createImagePanorama("./images/38.jpg");
let panorama39 = createImagePanorama("./images/39.jpg");
let panorama40 = createImagePanorama("./images/40.jpg");
let panorama41 = createImagePanorama("./images/41.jpg");
let panorama42 = createImagePanorama("./images/42.jpg");
let panorama43 = createImagePanorama("./images/43.jpg");
let panorama44 = createImagePanorama("./images/44.jpg");
let panorama45 = createImagePanorama("./images/45.jpg");
let panorama46 = createImagePanorama("./images/46.jpg");
let panorama47 = createImagePanorama("./images/47.jpg");
let panorama48 = createImagePanorama("./images/48.jpg");
let panorama49 = createImagePanorama("./images/49.jpg");
let panorama50 = createImagePanorama("./images/50.jpg");
let panorama51 = createImagePanorama("./images/51.jpg");
let panorama52 = createImagePanorama("./images/52.jpg");
let panorama53 = createImagePanorama("./images/53.jpg");
let panorama54 = createImagePanorama("./images/54.jpg");
let panorama55 = createImagePanorama("./images/55.jpg");
let panorama56 = createImagePanorama("./images/56.jpg");
let panorama57 = createImagePanorama("./images/57.jpg");
let panorama58 = createImagePanorama("./images/58.jpg");
let panorama59 = createImagePanorama("./images/59.jpg");
let panorama60 = createImagePanorama("./images/60.jpg");
let panorama61 = createImagePanorama("./images/61.jpg");
let panorama62 = createImagePanorama("./images/62.jpg");
let panorama63 = createImagePanorama("./images/63.jpg");
let panorama64 = createImagePanorama("./images/64.jpg");
let panorama65 = createImagePanorama("./images/65.jpg");

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
VR_Screen(panorama22, 432.18, 185.26, 5000.0);
VR_Screen(panorama23, 432.18, 185.26, 5000.0);
VR_Screen(panorama24, 2008.27, -48.68, 5000.0);
VR_Screen(panorama25, 5000.0, 154.8, 22.93);
VR_Screen(panorama26, 5000.0, 275.83, 155.99);
VR_Screen(panorama27, 5000.0, 149.56, -272.84);
VR_Screen(panorama28, 5000.0, -266.85, -190.33);
VR_Screen(panorama29, 5000.0, 132.84, 299.7);
VR_Screen(panorama30, 5000.0, 132.84, 299.7);
VR_Screen(panorama31, -1816.26, -441.72, -5000.0);
VR_Screen(panorama32, 432.18, 185.26, 5000.0);
VR_Screen(panorama33, 432.18, 185.26, 5000.0);
VR_Screen(panorama34, 2008.27, -48.68, 5000.0);
VR_Screen(panorama35, 5000.0, 154.8, 22.93);
VR_Screen(panorama36, 5000.0, 275.83, 155.99);
VR_Screen(panorama37, 5000.0, 149.56, -272.84);
VR_Screen(panorama38, 5000.0, -266.85, -190.33);
VR_Screen(panorama39, 5000.0, 132.84, 299.7);
VR_Screen(panorama40, 5000.0, 132.84, 299.7);
VR_Screen(panorama41, -1816.26, -441.72, -5000.0);
VR_Screen(panorama42, 432.18, 185.26, 5000.0);
VR_Screen(panorama43, 432.18, 185.26, 5000.0);
VR_Screen(panorama44, 2008.27, -48.68, 5000.0);
VR_Screen(panorama45, 5000.0, 154.8, 22.93);
VR_Screen(panorama46, 5000.0, 275.83, 155.99);
VR_Screen(panorama47, 5000.0, 149.56, -272.84);
VR_Screen(panorama48, 5000.0, -266.85, -190.33);
VR_Screen(panorama49, 5000.0, 132.84, 299.7);
VR_Screen(panorama50, 5000.0, 132.84, 299.7);
VR_Screen(panorama51, -1816.26, -441.72, -5000.0);
VR_Screen(panorama52, 432.18, 185.26, 5000.0);
VR_Screen(panorama53, 432.18, 185.26, 5000.0);
VR_Screen(panorama54, 2008.27, -48.68, 5000.0);
VR_Screen(panorama55, 5000.0, 154.8, 22.93);
VR_Screen(panorama56, 5000.0, 275.83, 155.99);
VR_Screen(panorama57, 5000.0, 149.56, -272.84);
VR_Screen(panorama58, 5000.0, -266.85, -190.33);
VR_Screen(panorama59, 5000.0, 132.84, 299.7);
VR_Screen(panorama60, 5000.0, 132.84, 299.7);
VR_Screen(panorama61, -1816.26, -441.72, -5000.0);
VR_Screen(panorama62, 432.18, 185.26, 5000.0);
VR_Screen(panorama63, 432.18, 185.26, 5000.0);
VR_Screen(panorama64, 2008.27, -48.68, 5000.0);
VR_Screen(panorama65, 5000.0, 154.8, 22.93);

panorama1.link(panorama2, new THREE.Vector3(-5000.0, 45.33, -428.24));
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
panorama21.link(panorama22, new THREE.Vector3(5000.0, -612.71, -54.24));
panorama22.link(panorama23, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama23.link(panorama24, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama24.link(panorama25, new THREE.Vector3(1793.92, -38.0, 5000.0));
panorama25.link(panorama26, new THREE.Vector3(5000.0, 154.8, 22.93));
panorama26.link(panorama27, new THREE.Vector3(5000.0, -182.81, -280.65));
panorama27.link(panorama28, new THREE.Vector3(5000.0, -271.15, 2303.48));
panorama28.link(panorama29, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama29.link(panorama30, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama30.link(panorama31, new THREE.Vector3(5000.0, -29.45, 295.07));
panorama31.link(panorama32, new THREE.Vector3(5000.0, -612.71, -54.24));
panorama32.link(panorama33, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama33.link(panorama34, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama34.link(panorama35, new THREE.Vector3(1793.92, -38.0, 5000.0));
panorama35.link(panorama36, new THREE.Vector3(5000.0, 154.8, 22.93));
panorama36.link(panorama37, new THREE.Vector3(5000.0, -182.81, -280.65));
panorama37.link(panorama38, new THREE.Vector3(5000.0, -271.15, 2303.48));
panorama38.link(panorama39, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama39.link(panorama40, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama40.link(panorama41, new THREE.Vector3(5000.0, -29.45, 295.07));
panorama41.link(panorama42, new THREE.Vector3(5000.0, -612.71, -54.24));
panorama42.link(panorama43, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama43.link(panorama44, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama44.link(panorama45, new THREE.Vector3(1793.92, -38.0, 5000.0));
panorama45.link(panorama46, new THREE.Vector3(5000.0, 154.8, 22.93));
panorama46.link(panorama47, new THREE.Vector3(5000.0, -182.81, -280.65));
panorama47.link(panorama48, new THREE.Vector3(5000.0, -271.15, 2303.48));
panorama48.link(panorama49, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama49.link(panorama50, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama50.link(panorama51, new THREE.Vector3(5000.0, -29.45, 295.07));
panorama51.link(panorama52, new THREE.Vector3(5000.0, -612.71, -54.24));
panorama52.link(panorama53, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama53.link(panorama54, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama54.link(panorama55, new THREE.Vector3(1793.92, -38.0, 5000.0));
panorama55.link(panorama56, new THREE.Vector3(5000.0, 154.8, 22.93));
panorama56.link(panorama57, new THREE.Vector3(5000.0, -182.81, -280.65));
panorama57.link(panorama58, new THREE.Vector3(5000.0, -271.15, 2303.48));
panorama58.link(panorama59, new THREE.Vector3(5000.0, -266.85, -190.33));
panorama59.link(panorama60, new THREE.Vector3(5000.0, -273.47, 1517.24));
panorama60.link(panorama61, new THREE.Vector3(5000.0, -29.45, 295.07));
panorama61.link(panorama62, new THREE.Vector3(5000.0, -612.71, -54.24));
panorama62.link(panorama63, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama63.link(panorama64, new THREE.Vector3(363.99, -37.48, 5000.0));
panorama64.link(panorama65, new THREE.Vector3(1793.92, -38.0, 5000.0));
// panorama11.link(panorama12, new THREE.Vector3(-5000.0, -21.57, -628.63));

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
  panorama65
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
