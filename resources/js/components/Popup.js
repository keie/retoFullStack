import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Home from './Home';
import './css/popup.css';


export default class Popup extends Component {

      render() {
        return (

              <div className="popupContainer">
                <div className="popup">
                  hola jeje
                </div>
              </div>

        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Popup />, document.getElementById('example'));
}