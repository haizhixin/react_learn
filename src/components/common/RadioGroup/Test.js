import React, { Component } from "react"
import RadioGroup from "./RadioGroup"
export default class Test extends Component {
    state = {
        datas: [
            { value: "football", text: "足球" },
            { value: "basketball", text: "篮球" },
            { value: "movie", text: "电影" }
        ],
        value: ""
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <RadioGroup name="love"  {...this.state}
                onChange={(val) => {
                    this.setState({
                        value: val
                    })

                    console.log(val, "选中的value值")
                }}
            ></RadioGroup>
        )
    }
}