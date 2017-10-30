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
                        <div className="parts">One</div>
                        <div className="parts">Two</div>
                        <div className="parts">Three</div>
                        <div className="parts">Four</div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
