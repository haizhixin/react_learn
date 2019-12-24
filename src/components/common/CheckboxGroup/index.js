import React, { Component } from 'react'
export default class CheckboxGroup extends Component {
    constructor(props) {
        super(props)
    }

    handlerChange = e => {
        let newArr = []
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        } else {
            newArr = this.props.chooseDatas.filter(item => item != e.target.value)
        }

        this.props.onChange && this.props.onChange(newArr, this.props.name, e)
    }

    getCheckboxs() {
        return this.props.datas.map((item, index) =>
            <label key={item.value} style={{
                width: "200px",
                display: "block",
                textAlign: "left"
            }}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.chooseDatas.includes(item.value)}
                    onChange={this.handlerChange}
                />
                {item.text}
            </label>)
    }

    render() {
        let bs = this.getCheckboxs();
        return (
            <div style={{
                width: "200px",
                margin: "0 auto"
            }}>{bs}</div>
        )
    }

}