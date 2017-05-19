
import React from 'react';
import Professions from './professions';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Professions />);
    expect(s).not.toBeUndefined();
})

