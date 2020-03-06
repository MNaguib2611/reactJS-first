import React from 'react';
import Post from './Post';
import './PostCard.css'
import axios from 'axios';
import { withRouter } from 'react-router-dom';




class Userposts extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            sortType:"asc",
            data:[],
            filterString:"",
            originalData:[]
        };
        
    }

    handleChange =(e) =>{
        console.log(this.state.originalData,this.state.data);
        this.setState({[e.target.name]:e.target.value});
        if (e.target.value==="") {
            this.setState({data:[...this.state.originalData]});
        } else {
            this.setState({data: this.state.originalData.filter((post)=> {
                return post.title.toLowerCase().includes(e.target.value.toLowerCase()); 
            }) });
        }
       
    }
  

    componentDidMount() {
        const { match: { params: { userId}}}=this.props;
        let urlP;
        userId?urlP="https://jsonplaceholder.typicode.com/posts?userId="+userId:urlP="https://jsonplaceholder.typicode.com/posts";
        axios.get(urlP).then((result)=>{
            this.setState({data:result.data});
            this.setState({originalData:result.data});
        });    
    }  
    
    componentDidUpdate(newProps,newState) {
        const { match: { params: { userId}}}=this.props;
        if (newProps.match.params.userId !==userId) {
            let urlP;
            userId?urlP="https://jsonplaceholder.typicode.com/posts?userId="+userId:urlP="https://jsonplaceholder.typicode.com/posts";
            axios.get(urlP).then((result)=>{
                this.setState({data:result.data});
                // this.setState({originalData:result.data});
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
        return isReversed * a.title.localeCompare(b.title);
    });
      return (
          <>
          <div className="row">
          <div className="m-5 col-lg-3  text-center ">
            <input className="form-control " type="text" name="filterString" onChange={this.handleChange} value={this.state.filterString} placeholder="Search" />
          </div>
          <div className="col-lg-6 mb-0">
                <h1>Sorting by Title</h1>
                    <button className="btn btn-primary m-3" onClick={()=>{this.onSort('asc')}}>Asc</button>
                    <button className="btn btn-primary m-3" onClick={()=>{this.onSort('desc')}}>Desc</button>
        </div>
          </div>
          
        <div className="containerFlex">{
            sorted.map(post => 
             <Post key={post.id} post={post} />
            )}
        </div>
        </>
        )
    }
  }


  
  export default withRouter(Userposts) ;