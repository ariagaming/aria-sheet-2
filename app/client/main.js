
import React from 'react';
import { render } from 'react-dom';
import App from './modules/shell/components/app/app.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './modules/character/reducer';

import __character from './modules/character/mocks/__character';
import __races from './modules/character/mocks/__races';
import __professions from './modules/character/mocks/__classes';
import __weapons from './modules/character/mocks/__weapons';

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
        raceDialogShown: false,
        index: 0
    }
};

const store = createStore(characterReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('jsx-app'));
