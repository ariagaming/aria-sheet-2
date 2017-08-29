
import React from 'react';
import Boss from './boss';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Boss />);
    expect(s).not.toBeUndefined();
})

