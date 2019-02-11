
/*
*   React Game Store 200 - client - exercice-01-correction
*   author: Aurélien Dupays Dexemple
*/

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice01CorrectionApp as App } from '../src/exercice-01-correction';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-01-correction client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);