
import React from 'react';
import Equipment from './equipment';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Equipment />);
    expect(s).not.toBeUndefined();
})

