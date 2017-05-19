
import React from 'react';
import SpecialAbilities from './specialAbilities';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<SpecialAbilities />);
    expect(s).not.toBeUndefined();
})

