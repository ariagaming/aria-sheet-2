
import React from 'react';
import PageTwo from './pageTwo';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<PageTwo />);
    expect(s).not.toBeUndefined();
})

