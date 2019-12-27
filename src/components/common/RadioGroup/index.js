import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from "../../../utils/commonTypes"
import WithDataGroup from "../Hoc/withDataGroup"

class RadioGroup extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        info: types.singleData.isRequired
    }

    handerChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }

    render() {
        return (<label>
            <input
                type="radio"
                name={this.props.name}
                value={this.props.info.value}
                checked={this.props.value == this.props.info.value}
                onChange={this.handerChange}
            />
            {this.props.info.text}
        </label>)
    }
}

export default WithDataGroup(RadioGroup)
