
import React from 'react';
import Specials from './specials';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Specials />);
    expect(s).not.toBeUndefined();
})

