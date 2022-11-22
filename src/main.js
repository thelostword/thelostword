/*
 * @Author: thelostword
 * @Date: 2022-11-22 10:22:59
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-22 12:27:24
 * @FilePath: \thelostword\src\main.js
 */
import './styles/index.scss';
import { renderWebGL } from './webgl';

function setup(app) {
  const canvas = document.createElement('canvas');
  app.appendChild(canvas);

  renderWebGL(canvas);
}

setup(document.querySelector('#App'));
