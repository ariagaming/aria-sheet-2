
import React from 'react';
import { render } from 'react-dom';
import App from './modules/shell/components/app/app.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './modules/character/reducer';

import __character from './modules/character/mocks/__character';

const initialState = {
    character: __character,
    dialog: {
        shown: false
    }
};
const store = createStore(characterReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('jsx-app'));
