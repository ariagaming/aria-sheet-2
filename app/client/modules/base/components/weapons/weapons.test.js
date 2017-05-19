
import React from 'react';
import Weapons from './weapons';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Weapons />);
    expect(s).not.toBeUndefined();
})

