
import React from 'react';
import SpellConfiguration from './spellConfiguration';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<SpellConfiguration />);
    expect(s).not.toBeUndefined();
})

