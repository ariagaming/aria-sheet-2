
import React from 'react';
import Login from './login';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Login />);
    expect(s).not.toBeUndefined();
})

