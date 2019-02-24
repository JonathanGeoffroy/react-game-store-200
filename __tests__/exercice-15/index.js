/*
*   React Game Store 200 - __tests__ - exercice-15
*   author: Aurélien Dupays Dexemple
*/

import React from 'react';
import { mount } from 'enzyme';

import { Title } from '../../src/core/components/exercice-02-correction/Title';

describe(`>> Exercice 15 Test Suite`, () => {
    let TitleWrapper = null;

    beforeEach(() => { TitleWrapper =  null; });

    it(`>>> Title should render <h1 /> HTMLElement - Full DOM Rendering`, () => {
        TitleWrapper = mount(<Title />);

        expect( _ ).toEqual(1);
    });
});