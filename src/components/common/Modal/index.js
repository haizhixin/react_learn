import React from 'react'
import "./index.css"

export default function Modal(props) {
    var obj = {
        bg: "rgb(0, 0, 0, 0.5)"
    }
    var props = Object.assign({}, obj, props)
    return (
        <>
            <div onClick={e => {
                if (e.target.className == "modal") {//防止冒泡事件
                    props.onClose()
                }

            }} className={"modal"} style={{ backgroundColor: props.bg }}>
                <div className={"modal-center"}>
                    {props.children}
                </div>
            </div>

        </>
    )
}