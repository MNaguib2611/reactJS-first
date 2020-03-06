import React from 'react';
import './taskCard.css'   


class TaskCard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
      return (
        <div className="text-center col-lg-3 m-5 p-1 bg-light taskCard" >
        <h3>{this.props.info.title}  Tasks</h3>
            <table className="table col-lg-12 table-striped table-bordered table-hover">
                <thead className="thead-dark">
                <tr>

                <th style={{width:"65%"}}>
                       Task
                    </th>
                    <th>
                       Action
                    </th> 
                </tr>
                </thead>
               <tbody className="tbody-light">
               {this.props.data.length!==0?this.props.data.map((task,indx)=>
                    <tr key={indx} className={this.props.info.title==='Deleted'?'lineThrough':''}>
                    <td>
                            {task}
                    </td>
                    <td>
                    {this.props.info.title==='Ongoing'?
                        <>
                        <button 
                            value={indx} key='done' 
                            className="btn btn-sm btn-success m-1" 
                            onClick={this.props.done}>
                            done
                            </button>
                        <button value={indx} key='delete' 
                            className="btn btn-sm btn-danger m-1" 
                            onClick={this.props.delete}>
                        delete
                        </button>
                        </>
                        :""
                    }

                    {this.props.info.title==='Completed'?
                        <>
                            <button 
                                value={indx} key='return' 
                                className="btn btn-sm  btn-primary m-1" 
                                onClick={this.props.ret}>
                                Return
                                </button>
                            <button 
                                value={indx} key='delete' 
                                className="btn btn-sm btn-danger m-1" 
                                onClick={this.props.delete}>
                                delete
                                </button>
                        </>
                        :""
                    }
                    {this.props.info.title==='Deleted'?
                            <button 
                            value={indx} key='done' 
                            className="btn btn-sm btn-warning m-1"
                            onClick={this.props.ret}>
                            Return
                            </button>
                        :""
                    }
                    </td>
                    </tr>
                ):<tr><td colSpan="2"><h3>No Tasks</h3></td></tr>}
               
               </tbody>

                
                
            </table>
           
        </div>

        )
    }
  }


  
  export default TaskCard;