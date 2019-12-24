import React, { Component } from 'react'
export default class Select extends Component {


    constructor(props) {
        super(props)
    }
    getOptions() {
        return this.props.datas.map(item => <option key={item.value} value={item.value}>{item.text}</option>)
    }
    handlerChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }

    render() {
        let bs = this.getOptions();
        return (<select style={
            {
                width: "300px",
                height: "100px",
                border: "1px solid blue",
                fontSize: "30px",
                fontWeight: "bolder",
            }
        } onChange={this.handlerChange} name={this.props.name}>
            {bs}
        </select>)
    }
} 