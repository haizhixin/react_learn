import React, { Component } from 'react'
import CheckboxGroup from "../CheckboxGroup"
import { getAllStudents } from "../../../service/student"

export default class Test extends Component {
    state = {
        datas: [
            { value: "football", text: "足球" },
            { value: "basketball", text: "篮球" },
            { value: "movie", text: "电影" }
        ],
        chooseDatas: []
    }

    async componentWillMount() {
        const stus = await getAllStudents();
        this.setState({
            datas: stus.map(item => ({ value: item.id.toString(), text: item.name }))
        })
    }

    render() {
        return (
            <CheckboxGroup
                name="loves"
                {...this.state}
                onChange={vals => {
                    this.setState({
                        chooseDatas: vals
                    })
                }}

            ></CheckboxGroup>

        )

    }
}