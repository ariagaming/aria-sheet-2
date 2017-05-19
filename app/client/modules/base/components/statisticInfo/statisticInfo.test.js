
import React from 'react';
import StatisticInfo from './statisticInfo';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<StatisticInfo />);
    expect(s).not.toBeUndefined();
})

