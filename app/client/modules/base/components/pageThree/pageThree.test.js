
import React from 'react';
import PageThree from './pageThree';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<PageThree />);
    expect(s).not.toBeUndefined();
})

