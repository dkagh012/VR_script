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
let panorama = createImagePanorama("./images/1.jpg");
let panorama2 = createImagePanorama("./images/2.jpg");
let panorama3 = createImagePanorama("./images/3.jpg");
let panorama4 = createImagePanorama("./images/4.jpg");

let panorama_Two = createImagePanorama("./images/OneItem.jpg");
let panorama_Three = createImagePanorama("./images/TwoItem.jpg");
let panorama_Four = createImagePanorama("./images/ThreeItem.jpg");
const PANORAMA2_LINK = "./images/2.jpg";
const PANORAMA3_LINK = "./images/3.jpg";
VR_Screen(panorama, -5000.0, 171.4, 1359.04);
VR_Screen(panorama2, -5000.0, -21.57, -628.63);
VR_Screen(panorama3, -90.99, 501.3, -5000.0);
VR_Screen(panorama4, -90.99, 501.3, -5000.0);
VR_Screen(panorama_Two, 5000.0, 266.32, -84.5);
VR_Screen(panorama_Three, -5000.0, 26.47, -247.3);
VR_Screen(panorama_Four, 5000.0, 266.32, -84.5);

panorama.link(panorama2, new THREE.Vector3(-5000.0, 45.33, -428.24));
panorama2.link(panorama3, new THREE.Vector3(-5000.0, -21.57, -628.63));

OneItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama);
});
TwoItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama_Two);
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
viewer.add(
  panorama,
  panorama2,
  panorama3,
  panorama_Two,
  panorama_Three,
  panorama_Four
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
