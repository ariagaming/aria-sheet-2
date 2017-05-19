
import React from 'react';
import Skills from './skills';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Skills />);
    expect(s).not.toBeUndefined();
})

