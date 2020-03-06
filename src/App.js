import React from 'react';
import {movieList} from './components/movies/movieList';
import Movies from './components/movies/Movies';
import Users from './components/users/Users';
import Userposts from './components/posts/Userposts';
import Navbar from './components/pageComponents/Navbar';
import Alltasks from './components/tasks/Alltasks';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





import './App.css';


class App extends React.Component {
 state = {
   searchedString:""
 }
  handleSearchedString = (text) =>{
    // this.setState({searchedString:text});
    // console.log(this.state.searchedString);
    this.setState({searchedString: text}, () => {
      console.log(this.state.searchedString);
  });
  
    
  }
  render() {
    return (
      <Router>
        <div>
         <Navbar handleSearchedString={this.handleSearchedString} />
          <Switch>
            <Route exact path="/">
            <div className="row">
              <div className="row rightContainer">
                <Movies className="containerFlex" movies={movieList} />      
              </div>
            </div>
            </Route>
            <Route exact path="/users">
            <div className="row">
              <div className="row rightContainer">
                    <Users flt={this.state.searchedString}/>
              </div>
            </div>  
            </Route>
            <Route exact path="/posts">
            <div className="row">
              <div className="row rightContainer" flt={this.state.searchedString}>
              <Userposts />
              </div>
            </div> 
            </Route>
            <Route exact path="/users/:userId/posts">
            <div className="row">
              <div className="row rightContainer" flt={this.state.searchedString}>
              <Userposts />
              </div>
            </div> 
            </Route>
            <Route exact path="/to-do-list">
             <Alltasks  />
            </Route>
          </Switch>
        </div>
      </Router>
  
  
    );
  }
}



export default App;



