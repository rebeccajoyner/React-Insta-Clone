import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';



class App extends React.Component {
  state = {
    data: [],
    search: ''
  };
  

      componentDidMount() {
     this.setState({ data: dummyData })
      }
  
  
  searchFilter = e => {
    const newFilter = this.state.data.filter(post => 
      post.username === this.state.search);
    
  }
  
  
    render() {

      return (
        <div className="App">

          <SearchBar
            changeHandler={this.changeHandler} newSearch={this.state.search} />
          
          <PostContainer data={this.state.data} />
      
        </div>
      );
    }
  }



export default App;
