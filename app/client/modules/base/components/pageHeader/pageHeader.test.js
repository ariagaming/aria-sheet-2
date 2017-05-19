
import React from 'react';
import PageHeader from './pageHeader';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<PageHeader />);
    expect(s).not.toBeUndefined();
})

