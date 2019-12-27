import React, { Component } from 'react'
import types from "../../../utils/commonTypes"
import PropTypes from "prop-types"
import WithDataGroup from "../Hoc/withDataGroup"
class CheckboxGroup extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        info: types.singleData.isRequired,
        name: PropTypes.string,
        chooseDatas: types.ChooseDatas.isRequired,
        onChange: PropTypes.func
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
    render() {
        return (
            <label style={{
                width: "200px",
                display: "block",
                textAlign: "left"
            }}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.chooseDatas.includes(this.props.info.value)}
                    onChange={this.handlerChange}
                />
                {this.props.info.text}
            </label>
        )
    }

}

export default WithDataGroup(CheckboxGroup) 