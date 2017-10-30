import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="main">
                    <section>
                        <div className="part1">One</div>
                        <div className="part2">Two</div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
