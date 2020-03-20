import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
  state = {
    person: null,
  };
  async componentDidMount(){
    const res = await fetch("https://assignment-nodejs.herokuapp.com/api/phone");
    const data = await res.json();
    console.log(data);
    this.setState({person:data[0].model});
  };

  render() {


    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div>
              {!this.state.person ? <p> Loading...</p> : <div> {this.state.person} </div>}
            </div>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    )
  }
}

export default App;
