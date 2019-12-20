import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'

export default class PagerList extends Component {
    state = {
        current: 1,//初始当前页
        limit: 10,//每页显示的数据量
        total: 100,//总数据量
        panelNumber: 5,//每页显示的数字页的个数
        studentList: [],//学生列表
        isLoading: false//正在加载中
    }
    constructor(props) {
        super(props)
        this.fetchStudents()
    }

    async fetchStudents() {
        this.setState({
            isLoading: true
        })
        const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
            .then(resp => resp.json()).then(resp => resp.data);

        this.setState({
            total: resp.cont,
            studentList: resp.findByPage,
            isLoading: false
        })
    }

    handlerChange = (newPage) => {
        this.setState({
            current: newPage
        })
        this.fetchStudents()
    }

    render() {

        return (
            <div className="container" >
                <StudentList stu={this.state.studentList}></StudentList>
                <Pager  {...this.state} onChangePage={this.handlerChange}></Pager>
                <Modal show={this.state.isLoading}></Modal>
            </div >



        )
    }


}
