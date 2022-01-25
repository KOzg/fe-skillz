import React from 'react';
import Header from '../Header';
import * as reactRedux from 'react-redux';
import { create } from 'react-test-renderer';
import { CHAR_0 } from 'picomatch/lib/constants';

let component;
const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

beforeEach(() => {
    useSelectorMock.mockClear();
  })

describe('Header', () => {

    it('matches the snapshot', () => {
        useSelectorMock.mockReturnValue({});
        component = create(<Header />);
        expect(component.toJSON).toMatchSnapshot();
    })

    it('make sure classnames and logo are renderer', () => {
        useSelectorMock.mockReturnValue({});
        component = create(<Header />).toJSON();
        expect(component.type).toBe('header');
        const child = component.children[0].children[0];
        expect(child.props.className.includes('__content')).toBe(true);
        const logo = child.children[0].children[0];
        expect(logo.type).toBe('img');
        expect(logo.props.className.includes('__logo'));
    });
  })