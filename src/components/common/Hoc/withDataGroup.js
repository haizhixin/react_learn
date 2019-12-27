import React, { Component } from 'react'
import types from "../../../utils/commonTypes"
export default function WithDataGroup(Comp) {

    return class DataGroupWrapper extends Component {
        static defaultProps = {
            datas: []
        }
        static PropType = {
            datas: types.GroupDatas.isRequired
        }

        render() {
            const comp = this.props.datas.map(item => <Comp key={item.value} info={item} {...this.props}></Comp>)
            return (
                <>
                    {comp}
                </>)
        }
    }


} 