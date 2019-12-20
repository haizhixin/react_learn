import React from 'react'
import "./index.css"

export default function ThreeLayout(props) {
    var defaultPropers = {
        minWith: 800,
        leftWidth: 200,
        rightWidth: 200,
        gap: 20
    }
    var props = Object.assign({}, defaultPropers, props)
    return (
        <div className="container">
            <div className="main" style={
                {
                    minWith: props.minWidth,
                    marginLeft: props.gap,
                    marginRight: props.gap
                }
            }>
                {props.children}
            </div>
            <div className="left" style={
                {
                    width: props.leftWidth,
                }
            }> {props.left}</div>
            <div className="right" style={
                {
                    width: props.rightWidth,
                }
            }>{props.right}</div>
        </div>
    )
}