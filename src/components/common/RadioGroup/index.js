import React, { Component } from 'react'


export default class RadioGroup extends Component {
    constructor(props) {
        console.log(props, "props")
        super(props)
    }

    handerChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }
    getRadio() {
        return this.props.datas.map(item =>
            <label key={item.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.value == item.value}
                    onChange={this.handerChange}
                />
                {item.text}
            </label>

        )
    }

    render() {
        const radios = this.getRadio();
        return <div>
            {radios}
        </div>

    }

}