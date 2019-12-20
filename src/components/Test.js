import React, { Component } from "react"
import Modal from "./common/ThreeLayout"
import ThreeLayout from "./common/ThreeLayout"
export default class Test extends Component {
    render() {
        return (
            <ThreeLayout
                gap={100}
                left={
                    <div style={{ border: "1px solid blue" }}>
                        我是左侧区域
                    </div>
                }
                right={
                    <div style={
                        {
                            border: "1px solid blue",

                        }
                    }>我是右侧区域</div>
                }
            >
                <div style={
                    {
                        border: "1px solid red",
                        textAlign: "center"
                    }
                }>
                    <h1>我是中间区域</h1>
                    <p>静女其姝，俟我于城隅。爱而不见，搔首踟蹰</p>
                </div>

            </ThreeLayout>
        )
    }
}