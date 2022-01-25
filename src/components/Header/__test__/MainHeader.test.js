import React from 'react';
import MainHeader from './../MainHeaders';
import * as reactRedux from 'react-redux';
import { create } from 'react-test-renderer';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const mockState = {
    mainHeaders: [
        {
            name: "Header1",
            id: 0
        },
    ],
    subHeaders: [
        {
            name: "SubHeader1",
            id: 0,
            headerId: 0
        }
    ]

};

beforeEach(() => {
    useSelectorMock.mockClear();
  })

  let component;

describe('MainHeader', () => {

    it('matches the snapshot', () => {
        useSelectorMock.mockReturnValue({});
        component = create(<MainHeader />);
        expect(component.toJSON).toMatchSnapshot();
    })

    it('component should render even if no headers', () => {
        useSelectorMock.mockReturnValue({});
        component = create(<MainHeader />).toJSON();
        expect(component.type).toBe('nav');
        expect(component.children).toBe(null);
    });

    it('make sure the classNames and first header value are right', () => {
        useSelectorMock.mockReturnValue(mockState);
        component = create(<MainHeader />).toJSON();
        const classname = component.children[0].props.className;
        expect(classname.includes('__name')).toBe(true);
        expect(classname.includes('col')).toBe(true);
        expect(component.children[0].children[0].children[0].children[0]).toBe('Header1');
    })
  })