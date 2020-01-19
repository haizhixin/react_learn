import React, { Component } from "react"
import "./index.css"
import PropType from "prop-types"
import ImgContainer from "../Banner/ImgContainer/index"
import SwitchArrow from "../Banner/SwitchArrow/index"
import SwitchDot from "../Banner/SwitchDot/index"

export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        duration: 500
    }

    static propType = {
        width: PropType.number.isRequired,// 容器的宽度
        height: PropType.number.isRequired,// 容器的高度
        imgSrcs: PropType.arrayOf(PropType.string).isRequired,//照片的路径
        autoDuration: PropType.number.isRequired,// 自动切换的时间
        duration: PropType.number.isRequired//完成一次切换需要的时间
    }
    // 自动切换定时器
    timer = null;

    autoSwitch = () => {
        //清除计时器
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur)
        }, this.props.autoDuration)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    componentDidMount() {
        this.autoSwitch()
    }


    //  当前显示的第几张照片
    state = {
        curIndex: 0
    }

    imgContainerRef = el => {
        this.ImgContainer = el
    }
    // 左右切换
    handleArrowChange = type => {
        let cur = this.state.curIndex;
        if (type === "left") {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1
            }

        } else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0
            }
        }
        this.handleSwitch(cur)
    }
    //切换到某一页
    handleSwitch = index => {
        this.setState({
            curIndex: index
        })
        // 照片容器触发切换方法
        this.ImgContainer.switchTo(index)
    }

    render() {
        return (<div className="banner-container"
            style={{
                width: this.props.width,
                height: this.props.height
            }}
            onMouseEnter={() => {
                this.autoSwitch()
            }}
            onMouseLeave={() => {
                clearInterval(this.timer)
            }}


        >
            {/* 一,照片组件 */}
            <ImgContainer
                ref={this.imgContainerRef}
                imgSrcs={this.props.imgSrcs}
                imgWidth={this.props.width}
                imgHeight={this.props.height}
                duration={this.props.duration}
            ></ImgContainer>
            <SwitchDot total={this.props.imgSrcs.length}
                curIndex={this.state.curIndex}
                onChange={this.handleSwitch}></SwitchDot>
            <SwitchArrow
                onChange={this.handleArrowChange}
            ></SwitchArrow>



        </div>)

    }
}