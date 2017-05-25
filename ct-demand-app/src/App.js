import React, { Component } from 'react';
import './css/App.css';
import Nav from './Nav.js'
//import KitchenAPI from './KitchenAPI.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>

        <div className="App-body container">
          <h1 className="text-center" id="forecast">Forecast your feast.</h1>
          <h5 className="text-center" id="intro-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure iste, suscipit iusto quaerat aliquid voluptatum! Nam, rerum culpa saepe minus unde eveniet, facere dolorum voluptate libero rem veniam accusantium numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus aliquam aperiam sequi dolorem iure in itaque, tempora obcaecati labore fugiat sed perferendis, atque voluptates, eligendi consequuntur ut ad soluta!</h5>
        </div>
      </div>
    );
  }
}

export default App;
