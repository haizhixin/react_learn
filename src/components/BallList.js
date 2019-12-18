import React, { Component } from 'react'
import { getRandom } from '../util'
import Ball from './Ball'

//每个一段时间定义生成一个小球
export default class BallList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ballInfos: []
        }

        const timer = setInterval(() => {
            var info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xspeed: getRandom(50, 500),
                yspeed: getRandom(50, 500),
                bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
            }

            const ballInfos = this.state.ballInfos
            this.setState({
                ballInfos: [...ballInfos, info]
            })

            if (this.state.ballInfos.length === 30) {
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        let itemList = this.state.ballInfos.map((item, index) => <Ball {...item}></Ball>)
        return (
            <>
                {itemList}
            </>
        )
    }
}
