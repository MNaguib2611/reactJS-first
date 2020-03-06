import React from 'react';
import User from './User';
import './UserCard.css'
import axios from 'axios';




class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            sortType:"asc",
            data:[]
        };
    }

  

   
    

    componentDidMount(){   
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{ this.setState({data:result.data})} );  
    }  
    
    componentDidUpdate(newProps,newState){   
        if (this.props.flt !==newProps.flt ) {
            axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
                if (this.props.flt==null) {
                    this.setState({data:result.data})
                }else{
                    this.setState({data: result.data.filter((user)=> {
                        return user.username.toLowerCase().includes(this.props.flt.toLowerCase()); 
                    }) });
                }
             });       
        }   
                
    }  
    onSort(sortType){
        this.setState({sortType:sortType});
    }
    render() {
        const {data,sortType} =this.state;
        const sorted =data.sort((a,b)=>{
            const isReversed=(sortType==='asc')?1:-1;
            return isReversed * a.username.localeCompare(b.username);
        });
      return (
        <>
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 ">
                <h1>Sorting by Username</h1>
                    <button className="btn btn-primary m-3" onClick={()=>{this.onSort('asc')}}>Asc</button>
                    <button className="btn btn-primary m-3" onClick={()=>{this.onSort('desc')}}>Desc</button>
                </div>
            </div>
        </div>
        <div className="col-lg-12 containerFlex">
        {
            sorted.map(user => 
             <User key={user.id} user={user} />
            )}
        </div>
        </>
        )
    }
  }


  
  export default Users;