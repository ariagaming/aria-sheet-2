
import React from 'react';
import PageOne from './pageOne';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<PageOne />);
    expect(s).not.toBeUndefined();
})

