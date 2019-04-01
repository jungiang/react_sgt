import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import StudentTable from './students_table';
import AddStudent from './add_student';
import axios from 'axios';

class App extends React.Component{
    state = {
        students: [],
        error: ''
    }
    componentDidMount(){
        this.getStudentData();
    }
    // getStudentData(){
        // axios.get('http://localhost:3001/api/grades').then(resp=>{
        //     console.log('Server response:', resp);
        //     this.setState({
        //         students: resp.data.data
        //     });   
        // }).catch(err=>{
        //     console.log('Error getting student data:', err.message);
        //     this.setState({
        //         error: 'Error retrieving student data'
        //     });
        // });
    // } old way of doing promise axios calls
    async getStudentData(){
        try{
            const resp = await axios.get('/api/grades');
            this.setState({
                students: resp.data.data
            });    
        } catch(err){
            this.setState({
                error: 'Error retrieving student data'
            });
        }
    }
    addStudent = async student=>{
        // try{
            await axios.post('/api/grades', student);
            this.getStudentData();
        // }catch(err){

        // }
    }
    deleteStudent = async id=>{
        // try{
            await axios.delete(`/api/grades/${id}`);
            this.getStudentData();
        // }catch(err){

        // }
    }
    render(){
        return(
            <div>
                <h1 className="center">React SGT</h1>
                <h5 className="red-text text-darken-2">{this.state.error}</h5>
                <div className="row">
                    <StudentTable col="s12 m8" list={this.state.students} delete={this.deleteStudent}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        )
    }
}

export default App;
