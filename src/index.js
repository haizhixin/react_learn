import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import src1 from './assest/1.jpg';
import src2 from './assest/2.jpg';
import src3 from './assest/3.jpg';

let srcs = [src1, src2, src3];
let container = document.getElementById("root");
let index = 0;


function render() {
    ReactDOM.render(<img src={srcs[index]} alt="" />, container);
}
let timer;
function start() {
    stop()
    timer = setInterval(() => {

        index++;
        index = (index % 3)
        render()
    }, 1000)
}

function stop() {
    clearInterval(timer)
}
//鼠标进入图片切换
container.onmouseenter = () => {
    start()
}
// 鼠标移出图片停止切换
container.onmouseleave = () => {
    stop()
}





