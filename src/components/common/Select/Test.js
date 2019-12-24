import React, { Component } from 'react'
import Select from '../Select'
import { getAllStudents } from "../../../service/student.js"
export default class Test extends Component {
    state = {
        datas: [
            { value: "football", text: "足球" },
            { value: "basketball", text: "篮球" },
            { value: "movie", text: "电影" }
        ],
        value: ""
    }

    async componentWillMount() {
        const stus = await getAllStudents();
        this.setState({
            datas: stus.map(item => ({ value: item.id.toString(), text: item.name }))
        })
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (<Select
            name="loves"
            {...this.state
            }
            onChange={(val) => {
                console.log(val, "val")
                this.setState({
                    value: val
                })
            }}
        ></Select >)
    }


}


