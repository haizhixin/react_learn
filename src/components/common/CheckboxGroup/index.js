import React, { Component } from 'react'


export default class CheckboxGroup extends Component {



    getCheckboxs() {
        return this.props.datas.map(item =>
            <label key={item.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.chooseDatas.includes(item.value)}
                    onChange={this.handlerChange}
                />
            </label>)
    }

    render() {
        let bs = this.getCheckboxs();
        return (
            <div>{bs}</div>
        )
    }

}