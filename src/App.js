import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/Card-list.component'
import {Search} from './components/search/Search.component'

class App extends Component {

  constructor(){
    super()
    this.state = {
      monsters:[],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //vraca u json formatu
    .then(users => this.setState({monsters: users}))
  }

  render(){

    //isto ko i const monsters = this.state.monsters
    const{monsters, searchField} = this.state 
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
   

    return (
      
      <div className="App">
        <h1>Monster workers</h1>
        <p className="slova">The finest selection of minions in the underworld.</p>
        
        <Search 
        placeholder="search workers"
        handleChange={e => this.setState({searchField: e.target.value})}/>
        
        <CardList 
        monsters={filterdMonsters}/>
      
        </div>
    );
  }
}

export default App