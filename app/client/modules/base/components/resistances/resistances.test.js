
import React from 'react';
import Resistances from './resistances';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Resistances />);
    expect(s).not.toBeUndefined();
})

