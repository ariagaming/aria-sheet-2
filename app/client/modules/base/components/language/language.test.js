
import React from 'react';
import Language from './language';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<Language />);
    expect(s).not.toBeUndefined();
})

