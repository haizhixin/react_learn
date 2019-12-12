import React, { Component } from 'react'
import Student from './Student'
//这是一个类组件
export default class StudentList extends Component {
    render() {
        console.log(this.props.stus)
        const students = this.props.stus.map((item, index) => {
            item.num = index + 1;
            return <Student key={item.id} {...item}></Student>
        }
        )
        return (
            <table border="1" width="600px">
                <thead>
                    <th width="10%">序号</th>
                    <th width="10%">姓名</th>
                    <th width="15%">性别</th>
                    <th width="35%">邮箱</th>
                    <th width="30%">出生日期</th>
                </thead>
                <tbody border="1">
                    {students}
                </tbody>

            </table>
        )
    }
} 
