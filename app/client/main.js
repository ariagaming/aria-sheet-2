


import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './modules/character/reducer';

import __character from './modules/character/mocks/__character';
import __races from './modules/character/mocks/__races';
import __professions from './modules/character/mocks/__classes';
import __weapons from './modules/character/mocks/__weapons';



/* Initialize FireBase */

const firebase = require('firebase');
const config = {
    apiKey: "AIzaSyAfhyLmTEsf8N1G_khh-5JzDoOT7VtGeRo",
    authDomain: "aria-sheet.firebaseapp.com",
    databaseURL: "https://aria-sheet.firebaseio.com",
    projectId: "aria-sheet",
    storageBucket: "aria-sheet.appspot.com",
    messagingSenderId: "236826720805"
};
firebase.initializeApp(config);

/* End initialize Firebase */



const App = require('./modules/shell/components/app/app.js').default;
const character = JSON.parse(localStorage.getItem("character"));

let initialState = {
    character: (character || __character),
    data: {
        races: __races,
        professions: __professions,
        weapons: __weapons
    },
    dialog: {
        shown: false,
        index: 0
    }
};

const store = createStore(characterReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('jsx-app'));
