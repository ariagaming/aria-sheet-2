
import React from 'react';
import Container from './container';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Container />);
    expect(s).not.toBeUndefined();
})

