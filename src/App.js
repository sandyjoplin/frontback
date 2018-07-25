import React, { Component } from 'react';
import Tarjeta from './components/Tarjeta/Tarjeta'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {

    pokemons:[]

  }

  render() {
    return (
      <div className="App">
        {this.state.pokemons.map((pokemon)=>{
        console.log("EStoy pintadndo el pokemon "+pokemon);
        
        return <Tarjeta nombre={pokemon.name} img={pokemon.img}/>
      })}
      </div>
    );
  }

  componentDidMount(){

    console.log('Estoy entrando a hacer la peticion');
    

    axios.get('https://megustaelbackend.herokuapp.com/pokemons').then((response)=>{

      let data = response.data;
      console.log(data);
      
      this.setState({pokemons:data})

    })

    
  }

}

export default App;