
import React from 'react';
import NumberSlate from './numberSlate';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<NumberSlate />);
    expect(s).not.toBeUndefined();
})

