import React, { Component } from "react";
import PropType from "prop-types"
import "./index.css"

export default class SwitchDot extends Component {
    static propType = {
        total: PropType.number.isRequired,
        curIndex: PropType.number.isRequired,
        onChange: PropType.func.isRequired
    }

    render() {
        const spans = [];
        for (let i = 0; i < this.props.total; i++) {

            spans.push(
                <span key={i}
                    className={i === this.props.curIndex ? "active" : ""}
                    onClick={() => {
                        this.props.onChange && this.props.onChange(i)
                    }}
                ></span>
            )
        }
        return (<div className="dots">
            {spans}
        </div>)
    }
}