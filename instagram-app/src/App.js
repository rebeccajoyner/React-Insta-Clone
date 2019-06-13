import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';



class App extends React.Component {
  state = {
    data: []
  };
  

      componentDidMount() {
     this.setState({ data: dummyData })
      }
  
  
    render() {

      return (
        <div className="App">

          <SearchBar changeHandler={this.changeHandler}/>
          <PostContainer data={this.state.data} />
      
        </div>
      );
    }
  }



export default App;
