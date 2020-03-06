import React from 'react';
import TaskCard from './Taskcard';
import './taskCard.css'   

class Alltasks extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            newTask:"",
            ongoingTasks:["ReactJS"],
            completedTasks:["Java","Data Structue"],
            deletedTasks:["Petroleum"],
            tasks:{title:'Ongoing'},
            completed:{title:'Completed'},
            deleted:{title:'Deleted'}
        }

    }
    



    handleChange =(e) =>{
        this.setState({newTask:e.target.value});
    }
    handleAddTask =(e) =>{
        if (this.state.newTask!=='') {
            this.setState({ongoingTasks:this.state.ongoingTasks.concat([this.state.newTask])});
            this.setState({newTask:''});   
        }
    }    

    handleCompleteTask =(e) =>{
        let ongoing = [...this.state.ongoingTasks];
        let index = e.target.value;
        if (index !== -1) {
            this.setState({completedTasks:this.state.completedTasks.concat([ ongoing[index]])});
            ongoing.splice(index, 1);
            this.setState({ongoingTasks: ongoing});
        }
    }    
    handleDeleteOngingTask =(e) =>{
        let ongoing = [...this.state.ongoingTasks];
        let index = e.target.value;
        if (index !== -1) {
            this.setState({deletedTasks:this.state.deletedTasks.concat([ ongoing[index]])});
            ongoing.splice(index, 1);
            this.setState({ongoingTasks: ongoing});
        }
    }    

    handleDeleteCompletedTask =(e) =>{
        let completed = [...this.state.completedTasks];
        let index = e.target.value;
        if (index !== -1) {
            this.setState({deletedTasks:this.state.deletedTasks.concat([ completed[index]])});
            completed.splice(index, 1);
            this.setState({completedTasks: completed});
        }
    }        
    handleReturnCompletedTask =(e) =>{
        let completed = [...this.state.completedTasks];
        let index = e.target.value;
        if (index !== -1) {
            this.setState({ongoingTasks:this.state.ongoingTasks.concat([ completed[index]])});
            completed.splice(index, 1);
            this.setState({completedTasks: completed});
        }
    }
    handleReturnDeletedTask =(e) =>{
        let deleted = [...this.state.deletedTasks];
        let index = e.target.value;
        if (index !== -1) {
            this.setState({ongoingTasks:this.state.ongoingTasks.concat([ deleted[index]])});
            deleted.splice(index, 1);
            this.setState({deletedTasks: deleted});
        }
    }                

    render() {
      
      return (
       
        <div className="row" >
           <div className="col-lg-12 text-center mt-2">
            <input className="mr-sm-2" type="text" name="newTask" onChange={this.handleChange} value={this.state.newTask} placeholder="Add Task" aria-label="Add Task" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.handleAddTask}>Add Task</button>
           </div>

           <TaskCard  
                info={this.state.tasks} 
                data={this.state.ongoingTasks} 
                done={this.handleCompleteTask} 
                delete={this.handleDeleteOngingTask}/>
           <TaskCard 
                info={this.state.completed} 
                data={this.state.completedTasks}  
                ret={this.handleReturnCompletedTask} 
                delete={this.handleDeleteCompletedTask}/>

           <TaskCard 
                info={this.state.deleted} 
                data={this.state.deletedTasks}
                ret={this.handleReturnDeletedTask}  />
        </div>   
        )
    }
  }


  
  export default Alltasks;