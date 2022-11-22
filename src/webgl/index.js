/*
 * @Author: thelostword
 * @Date: 2022-11-22 11:13:45
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-22 12:21:38
 * @FilePath: \thelostword\src\webgl\index.js
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { resizeRendererToDisplaySize } from './resize';

export function renderWebGL(canvas) {
  // 创建一个WebGL渲染器(WebGLRenderer)
  const renderer = new THREE.WebGLRenderer({ canvas });

  // 透视摄像机(PerspectiveCamera)
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 30;

  const controls = new OrbitControls(camera, canvas);
  controls.update();

  // 创建一个场景(Scene)
  const scene = new THREE.Scene();

  // 创建一个包含盒子信息的立方几何体(BoxGeometry)
  const boxWidth = 10;
  const boxHeight = 10;
  const boxDepth = 10;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // 创建一个基本的材质
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

  // 创建一个网格(Mesh)
  const cube = new THREE.Mesh(geometry, material);

  // 将网格添加到场景中
  scene.add(cube);

  // 添加些光照
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-15, 20, 30);
    
    scene.add(light);
  }

  // 将场景和摄像机传递给渲染器来渲染出整个场景
  const render = () => {
    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
  }

  render();
  controls.addEventListener('change', render);
  window.addEventListener('resize', render);
}
