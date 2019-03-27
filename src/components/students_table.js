import React from 'react';
import studentData from '../dummy_data/student_list';

class StudentTable extends React.Component{
    state = {
        students: []
    }
    componentDidMount(){
        this.getStudentData();
    }
    getStudentData(){
        //call server here
        this.setState({
            students: studentData
        })
    }
    render(){
        const {students} = this.state;
        const studentElements = students.map((student)=>{
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            );
        })
        return (
            <div className="col s12 m8">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentElements}
                        {/* <tr>
                            <td>Jim Bob</td>
                            <td>Math 101</td>
                            <td>71</td>
                        </tr>
                        <tr>
                            <td>Bob Jim</td>
                            <td>Spanish</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>Bobby Jim</td>
                            <td>Physics</td>
                            <td>99</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentTable;