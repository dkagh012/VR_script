var panorama, panorama2, panorama3, viewer;
panorama = new PANOLENS.ImagePanorama("./images/1.jpg");
panorama2 = new PANOLENS.ImagePanorama("./images/2.jpg");
panorama3 = new PANOLENS.ImagePanorama("./images/3.jpg");
// 페이지 첫 화면을 어떻게 구성할건지 관해서 넣는부분
function VR_View(element, x, y, z) {
  element.addEventListener("enter", function () {
    viewer.tweenControlCenter(new THREE.Vector3(x, y, z), 0);
  });
}

panorama.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(new THREE.Vector3(-5000.0, 327.46, -1287.8), 0);
});

VR_View(panorama2, -5000.0, -21.57, -628.63);
VR_View(panorama3, -90.99, 501.3, -5000.0);

panorama.link(panorama2, new THREE.Vector3(-5000.0, 327.46, -1287.8));
panorama2.link(panorama3, new THREE.Vector3(-5000.0, -21.57, -628.63));

viewer = new PANOLENS.Viewer({ output: "console" });
viewer.add(panorama, panorama2, panorama3);
