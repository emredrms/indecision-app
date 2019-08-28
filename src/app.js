import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; 
import './styles/style.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = "Emre";
    }
    getGreeting() {
        return 'Hi all';
    }
}

const old = new OldSyntax();
console.log(old.getGreeting());

class NewSyntax {
    name = 'Emre';
    getGreeting = () => {
        return 'Hi all';
    }
}

const news = new NewSyntax();
console.log(news);