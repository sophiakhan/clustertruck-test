import React, { Component } from 'react';
import './css/App.css';
import Nav from './Nav.js'
import KitchenAPI from './KitchenAPI.js'

const days = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 3,
    sunday: 3
}

const weather = {
    raining: 4,
    snow: 5,
    nice: -2
}

class App extends Component {

  forecast = (d, w) => {
    console.log(days);
    var today = days[d];
    console.log(today);
    var climate = weather[w];

    return today + climate;
  } 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>

        <div className="App-body container">
          <h1 className="text-center" id="forecast">Forecast your feast.</h1>
          <h5 className="text-center" id="intro-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure iste, suscipit iusto quaerat aliquid voluptatum! Nam, rerum culpa saepe minus unde eveniet, facere dolorum voluptate libero rem veniam accusantium numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus aliquam aperiam sequi dolorem iure in itaque, tempora obcaecati labore fugiat sed perferendis, atque voluptates, eligendi consequuntur ut ad soluta!</h5>
          <p>{this.forecast('thursday', 'nice')}</p>
          <KitchenAPI />
        </div>
      </div>
    );
  }
}

export default App;
