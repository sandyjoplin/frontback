import React, {Component} from 'react';
import './Tarjeta.css';

class Tarjeta extends Component {
    render(){
        const {nombre, img} = this.props;

      return(
          <div className="Tarjeta">
              <p>{nombre}</p>
              <img className="imagen" src={img}/>
              
          </div>
      )
        //front_default
        //species, name
    }
}

export default Tarjeta;