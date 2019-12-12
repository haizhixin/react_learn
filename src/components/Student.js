import React from 'react'
import './Student.css'
//React组件包含两种 函数组件和类组件
//导出一个函数组件
export default function Student(props) {

    return (

        <tr>
            {/*显示一个学生的信息 */}
            <td width="10%" align="center">{props.num}</td>
            <td width="10%" align="center">{props.name}</td>
            <td width="15%" align="center">{props.sex == 1 ? "女" : "男"}</td>
            <td width="35%" align="center">{props.email}</td>
            <td width="30%" align="center">{props.birth}</td>
        </tr>
    )
}
