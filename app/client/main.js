
import React from 'react';
import { render } from 'react-dom';
import App from './modules/shell/components/app/app.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './modules/character/reducer';

import __character from './modules/character/mocks/__character';
import __races from './modules/character/mocks/__races';

let initialState = {
    character: __character,
    data: {
        races: __races
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
