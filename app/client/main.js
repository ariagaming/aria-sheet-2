


import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './modules/character/reducer';

import __character from './modules/character/mocks/__character';
import __races from './modules/character/mocks/__races';
import __classes from './modules/character/mocks/__classes';
import __weapons from './modules/character/mocks/__weapons';
import __specials from './modules/character/mocks/__specials';
import __barbarian from './modules/character/mocks/__barbarian';
import __monk from './modules/character/mocks/__monk';
import __paladin from './modules/character/mocks/__paladin';
import __priest from './modules/character/mocks/__priest';
import __rogue from './modules/character/mocks/__rogue';
import __earth_mage from './modules/character/mocks/__earth_mage';


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

const generateSpellIDs = c => {
    return {
        ...c,
        spells: c.spells.map((s, i) => {
            s.id = i;
            return s;
        })
    };
}


const App = require('./modules/shell/components/app/app.js').default;
let character = JSON.parse(localStorage.getItem("character")) || __character;
if (!character.classes) character.classes = [];

let initialState = {
    character: character,
    data: {
        races: __races,
        professions: [
            generateSpellIDs(__barbarian),
            generateSpellIDs(__paladin),
            generateSpellIDs(__priest),
            generateSpellIDs(__monk),
            generateSpellIDs(__earth_mage),
            generateSpellIDs(__rogue)
        ],
        weapons: __weapons,
        specials: __specials
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
