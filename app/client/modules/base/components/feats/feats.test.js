
import React from 'react';
import Feats from './feats';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Feats />);
    expect(s).not.toBeUndefined();
})

