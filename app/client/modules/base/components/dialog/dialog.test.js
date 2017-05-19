
import React from 'react';
import Dialog from './dialog';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Dialog />);
    expect(s).not.toBeUndefined();
})

