/*
 * @Author: thelostword
 * @Date: 2022-11-22 11:35:33
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-22 11:55:20
 * @FilePath: \thelostword\src\webgl\resize.js
 */
export const resizeRendererToDisplaySize = (renderer) => {
  const canvas = renderer.domElement;
  
  const pixelRatio = window.devicePixelRatio;

  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;

  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) renderer.setSize(width, height, false);
  
  return needResize;
}
