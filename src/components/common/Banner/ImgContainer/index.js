import React, { Component } from "react"

export default class ImgContainer extends Component {
    containerRef = (el) => {
        this.div = el;
    }

    //计时器的间隔时间
    tick = 16;
    // 计时器的序号
    timer = null;

    /**
         * 切换到第几张图片
         * 调用该函数，此组件会经过一段动画完成切换
         * @param {*} index 图片下标，从0开始
         */
    switchTo(index) {
        if (index < 0) {
            index = 0
        } else if (index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1;
        }
        // 1,根据index 计算div最终的marginLeft
        let targetLeft = -index * this.props.imgWidth;
        // 2,计算当前的marginLeft
        let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft)
        // 3,计算移动的次数
        let times = Math.ceil(this.props.duration / this.tick)
        let curTimes = 0;
        // 4,计算移动的总距离
        let totalDis = targetLeft - curLeft;

        // 5,计算每一次移动的距离
        let dis = parseFloat(totalDis / times);
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + "px";
            if (curTimes == times) {
                this.div.style.marginLeft = targetLeft + "px";
                clearInterval(this.timer)
            }
        }, this.tick)
    }






    render() {
        let imgs = this.props.imgSrcs.map((item, index) => <img src={item}
            style={{
                width: this.props.imgWidth,
                height: this.props.imgHeight,
                float: "left",
            }}
            key={index}></img>)
        return (
            <div
                ref={this.containerRef}
                style={
                    {
                        width: this.props.imgSrcs.length * this.props.imgWidth,
                        height: this.props.imgHeight
                    }
                }>
                {imgs}
            </div>
        )
    }
}