import React from "react"
import Student from "./Student"
export default function StudentList(props) {
    let studentList = props.stu.map(item => <Student {...item} key={item.id}></Student>)
    return (
        <ul>
            {studentList}
        </ul>
    )
}

