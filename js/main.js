let viewer, container;

function VR_Screen(element, x, y, z) {
  element.addEventListener("enter-fade-start", function () {
    viewer.tweenControlCenter(new THREE.Vector3(x, y, z), 0);
  });
}

function createImagePanorama(link) {
  return new PANOLENS.ImagePanorama(link);
}

container = document.querySelector("#container");

let panorama = createImagePanorama("./images/1.jpg");
let panorama2 = createImagePanorama("./images/2.jpg");
let panorama3 = createImagePanorama("./images/3.jpg");

VR_Screen(panorama, -5000.0, 327.46, -1287.8);
VR_Screen(panorama2, -5000.0, -21.57, -628.63);
VR_Screen(panorama3, -90.99, 501.3, -5000.0);

panorama.link(panorama2, new THREE.Vector3(-5000.0, 327.46, -1287.8));
panorama2.link(panorama3, new THREE.Vector3(-5000.0, -21.57, -628.63));

viewer = new PANOLENS.Viewer({
  output: "console",
  container: document.querySelector("#Image"),
});
viewer.add(panorama, panorama2, panorama3);
