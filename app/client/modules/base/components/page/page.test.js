


import React from 'react';
import Page from './page';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the page can be rendered', () => {
    const s = render(<Page />);
    expect(s).not.toBeUndefined();
})