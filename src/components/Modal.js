import React from "react"
import "./Modal.css"
export default function (props) {
    if (!props.show) { // 如果show为false则不显示加载中
        return null
    }
    return (<div className={"modal"}>
        <p>正在加载中...</p>
    </div>)
}