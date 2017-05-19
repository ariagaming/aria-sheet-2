
import React from 'react';
import Statistics from './statistics';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Statistics />);
    expect(s).not.toBeUndefined();
})

