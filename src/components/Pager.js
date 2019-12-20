import React from "react"
import "./Pager.css";

export default function Pager(props) {
    //  current初始当前页
    //  limit每页显示的数据量
    //  total总数据量
    //  panelNumber每页显示的数字页的个数
    //  onChangePage页码改变时的事件
    const pagerNumber = getPagerNumber(props);
    if (pagerNumber === 0) {
        return null
    }
    let min = getMinNumber(props);
    let max = getMaxNumber(props, min, pagerNumber);
    let numberSpan = [];
    for (let i = min; i <= max; i++) {
        numberSpan.push(<span key={i} onClick={() => {
            toPage(props, i)
        }} className={i === props.current ? "item active" : "item"}>{i}</span>)
    }
    return (
        <>
            <div>
                <span onClick={() => {
                    toPage(props, 1)
                }} className={props.current == 1 ? "item disabled" : "item"}>首页</span>
                <span onClick={() => {
                    toPage(props, props.current - 1 < 1 ? 1 : props.current - 1)
                }} className={props.current == 1 ? "item disabled" : "item"}>上一页</span>
                {/* 数字页码 */}
                {numberSpan}
                <span onClick={() => {
                    toPage(props, props.current + 1 > pagerNumber ? pagerNumber : props.current + 1)
                }} className={props.current == pagerNumber ? "item disabled" : "item"}>下一页</span>
                <span onClick={() => {
                    toPage(props, pagerNumber)
                }} className={props.current == pagerNumber ? "item disabled" : "item"}>尾页</span>
                <span className={"current"}>{props.current}</span>/
                <span>{pagerNumber}</span>
            </div>
        </>
    )
}
// 获取每个页显示的数字的最小数
function getMinNumber(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min
}
// 获取 每个页显示的数字的最大数
function getMaxNumber(props, min, pagerNumber) {
    let max = min + props.panelNumber - 1;
    if (max > pagerNumber) {
        max = pagerNumber
    }
    return max;
}

// 获取总页数
function getPagerNumber(props) {
    return Math.ceil(props.total / props.limit)
}
// 跳转到目标页面
function toPage(props, target) {
    if (props.current === target) {
        return
    }
    props.onChangePage && props.onChangePage(target)
}