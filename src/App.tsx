import React from 'react';
import './App.css';
import { Option, UnControlledSelect } from './components/UnControlledSelect';

const choices: Option[] = [
    ['grapefruit', 'Grapefruit'],
    ['lime', 'Lime'],
    ['coconut', 'Coconut'],
    ['mango', 'Mango']
];

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {' | '}
                    <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>

                <h2>UnControlledSelect</h2>
                <UnControlledSelect values={choices} selectedValue="lime" onValueChange={(val) => console.log(val)} />
            </header>
        </div>
    );
}

export default App;
