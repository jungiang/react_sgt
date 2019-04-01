import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import '../assets/css/app.scss';
import StudentTable from './students_table';
import AddStudent from './add_student';
import studentData from '../dummy_data/student_list';

let id = 100;

class App extends React.Component{
    state = {
        students: [],
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
    addStudent = student=>{
        student.id = id++;
        this.setState({
            students: [...this.state.students, student]
        })
    }
    deleteStudent = id=>{
        const studentsCopy = this.state.students.slice();
        const index = studentsCopy.findIndex(student=>(student.id === id));
        if(index >= 0){
            studentsCopy.splice(index, 1);
            this.setState({
                students: studentsCopy
            })    
        }
    }
    render(){
        return(
            <div>
                <h1 className="center">React SGT</h1>
                <div className="row">
                    <StudentTable col="s12 m8" list={this.state.students} delete={this.deleteStudent}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        )
    }
}

export default App;
