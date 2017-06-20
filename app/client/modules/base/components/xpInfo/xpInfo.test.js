
import React from 'react';
import XpInfo from './xpInfo';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<XpInfo />);
    expect(s).not.toBeUndefined();
})

