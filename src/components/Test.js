import React, { Component } from "react"
import Modal from "./common/Modal"

export default class Test extends Component {
    state = {
        show: false
    }
    constructor(props) {
        super(props)
    }
    // 显示朦层
    showModal = () => {
        this.setState({
            show: true
        })
    }
    // 关闭朦层
    hideModal = () => {

        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.show ? <Modal onClose={this.hideModal}>
                        <div>
                            <h1>我是一个朦层组件,点击阴影部分会关闭,该部分内容显示是通过props.children传递到朦层组件中的</h1>

                            <button onClick={this.hideModal}>关闭朦层</button>
                        </div>


                    </Modal> : null
                }
                <button onClick={this.showModal}>打开朦层</button>
            </div>
        )
    }
}