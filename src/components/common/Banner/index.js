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

    render() {
        return (<div className="banner-container"
            style={{
                width: this.props.width,
                height: this.props.height
            }}>
            {/* 一,照片组件 */}
            <ImgContainer
                imgSrcs={this.props.imgSrcs}
                imgWidth={this.props.width}
                imgHeight={this.props.height}
            ></ImgContainer>
            {/* 二,左翻右翻
            <SwitchArrow></SwitchArrow>
            {/* 三,小点 */}
            {/* <SwitchDot></SwitchDot>  */}

        </div>)

    }
}