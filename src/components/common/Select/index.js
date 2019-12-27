import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from "../../../utils/commonTypes"
import withDataGroup from "../Hoc/withDataGroup"

class Option extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        info: types.singleData.isRequired,
    }
    render() {
        return <option value={this.props.info.value}>{this.props.info.text}</option>
    }
}
const OptionGroup = withDataGroup(Option)
export default class Select extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
    }
    handlerChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }
    render() {
        return <select style={
            {
                width: "300px",
                height: "100px",
                border: "1px solid blue",
                fontSize: "30px",
                fontWeight: "bolder",
            }
        } onChange={this.handlerChange} name={this.props.name}>
            <OptionGroup {...this.props}></OptionGroup>
        </select>
    }
} 