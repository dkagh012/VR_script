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
let panorama = createImagePanorama("./images/1.jpg");
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

VR_Screen(panorama, -5000.0, 171.4, 1359.04);
VR_Screen(panorama2, -5000.0, -21.57, -628.63);
VR_Screen(panorama3, -90.99, 501.3, -5000.0);
VR_Screen(panorama4, -90.99, 501.3, -5000.0);
VR_Screen(panorama5, 5000.0, 226.54, 792.3);
VR_Screen(panorama6, 5000.0, 275.83, 155.99);
VR_Screen(panorama7, 5000.0, 149.56, -272.84);
VR_Screen(panorama8, 5000.0, 31.58, -1067.45);
VR_Screen(panorama9, 4642.68, 97.43, -5000.0);
VR_Screen(panorama10, 5000.0, 105.86, 17.6);
VR_Screen(panorama11, 5000.0, 94.28, -506.19);
VR_Screen(panorama_Two, 5000.0, 266.32, -84.5);
VR_Screen(panorama_Three, -5000.0, 26.47, -247.3);
VR_Screen(panorama_Four, 5000.0, 266.32, -84.5);

panorama.link(panorama2, new THREE.Vector3(-5000.0, 45.33, -428.24));
panorama2.link(panorama3, new THREE.Vector3(-5000.0, -21.57, -628.63));
panorama3.link(panorama4, new THREE.Vector3(-354.24, 175.15, -5000.0));
panorama4.link(panorama5, new THREE.Vector3(2558.17, 412.11, -5000.0));
panorama5.link(panorama6, new THREE.Vector3(5000.0, 68.33, 829.79));
panorama6.link(panorama7, new THREE.Vector3(5000.0, 25.61, 671.68));
panorama7.link(panorama8, new THREE.Vector3(5000.0, 149.56, -272.84));
panorama8.link(panorama9, new THREE.Vector3(5000.0, 31.58, -1067.45));
panorama9.link(panorama10, new THREE.Vector3(4642.68, 97.43, -5000.0));
panorama10.link(panorama11, new THREE.Vector3(5000.0, 105.86, 17.6));
// panorama11.link(panorama12, new THREE.Vector3(-5000.0, -21.57, -628.63));

OneItem.addEventListener("click", function () {
  // OneItem을 클릭했을 때 panorama2로 이동
  viewer.setPanorama(panorama);
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
viewer.add(
  panorama,
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
