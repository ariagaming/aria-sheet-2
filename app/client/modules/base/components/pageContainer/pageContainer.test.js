


import React from 'react';
import PageContainer from './pageContainer';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the page can be rendered', () => {
    const s = render(<PageContainer />);
    expect(s).not.toBeUndefined();
})