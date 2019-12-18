import React, { Component } from 'react'
import './Ball.css'

//定义一个类组件
//state为类组件的属性
export default class Ball extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: props.left || 0,//定义小球的初始位置如果不传则为0
            top: props.top || 0,//定义小球的初始位置如果不传则为0
            xspeed: props.xspeed,//定义小球的横移速度
            yspeed: props.yspeed,// 定义小球的竖移速度
        }

        let duration = 20;//每隔20毫秒移动一次
        setInterval(() => {
            let newLeft = this.state.left + this.state.xspeed * duration / 1000;
            let newTop = this.state.top + this.state.yspeed * duration / 1000;
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xspeed: -this.state.xspeed//横坐标反向
                })
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xspeed: -this.state.xspeed//横坐标反向
                })
            }


            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    yspeed: -this.state.yspeed//纵坐标反向
                })
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    yspeed: -this.state.yspeed//纵坐标反向
                })
            }

            this.setState({
                left: newLeft,
                top: newTop
            })
        }, duration)
    }
    render() {
        return (<div className={"circle"} style={
            {
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.bg || "red"
            }
        }></div>)
    }


}